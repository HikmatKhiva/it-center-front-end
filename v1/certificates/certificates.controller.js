import { pool } from "../../db/db.js";
import createPdf from "../../utils/generateCertificate.js";
import path from "path";
import fs from "fs";
const __dirname = path.resolve();
// each student map for generate certificate
const generateProcess = async (students, group, origin) => {
  let client;
  try {
    client = await pool.connect();
    await client.query(`BEGIN`);
    students.forEach(async (student) => {
      await createCertificate(student, group, origin);
    });
    await client.query(`COMMIT`);
    pool.query(`UPDATE groups SET is_group_finished = true WHERE id = $1`, [
      group.id,
    ]);
    return "success";
  } catch (error) {
    throw error;
  }
};
// generate certificates
export const generateCertificate = async (req, res) => {
  try {
    const { origin } = new URL(req.url, `${req.protocol}://${req.get("host")}`);
    const { id } = req.params;
    const groups = await pool.query(
      `
      SELECT 
        g.id,
        g.code,
        g.is_group_finished,
        g.teacher_id,
        t.first_name AS teacher_first_name,
        t.second_name AS teacher_second_name,
        c.name AS course_name,
        COALESCE(
          json_agg(
            json_build_object(
              'id', s.id,
              'first_name', TRIM(s.first_name),
              'second_name', TRIM(s.second_name),
              'group_id', s.group_id,
              'passport_id', s.passport_id,  
              'course_id', s.course_id,  
              'certificate_url',
                COALESCE(
                  (
                    SELECT  sc.certificate_url
                    FROM students_certificates sc
                    WHERE sc.student_id = s.id
                  )
                )
            )
          ), 
          json_build_array()
        ) AS students
        FROM groups g
        LEFT JOIN students s ON g.id = s.group_id
        LEFT JOIN teachers t ON g.teacher_id = t.id
        LEFT JOIN course c ON g.course_id = c.id
        WHERE g.id = $1
        GROUP BY 
          g.id, 
          g.code, 
          g.is_group_finished, 
          t.first_name, 
          t.second_name, 
          c.name
        ORDER BY 
        g.id;`,
      [id]
    );
    if (groups.rowCount === 0) {
      return res.status(404).json({ message: "group not found" });
    }
    const students = groups.rows[0].students.filter(
      (student) => student?.certificate_url === null
    );
    const group = groups.rows[0];
    await generateProcess(students, group, origin);
    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// save a certificate url 
export const createCertificateUrl = async (studentId, group) => {
  try {
    const updateUrl = await pool.query(
      `INSERT INTO students_certificates (certificate_url, student_id, group_id) VALUES ($1, $2, $3)`,
      [`${group?.code}/${studentId}.pdf`, studentId, group?.id]
    );
    if (updateUrl.rowCount === 0) {
      throw new Error("O'quvchi id si topilmadi.");
    }
  } catch (error) {
    throw error;
  }
};
// find certificate using QR-code
export const findCertificate = async (req, res) => {
  try {
    const { code } = req.query;
    if (typeof code !== "string")
      return res.status(400).json({ error: "Manzil xato" });
    let [groupCode, studentId] = code.split("/");
    studentId = studentId.split(".")[0];
    // Validate input types
    if (!studentId || !groupCode) {
      return res.status(400).json({ error: "Manzil xato" });
    }
    const certificate = await pool.query(
      `SELECT sc.*, g.code AS group_code 
       FROM students_certificates sc
       JOIN groups g ON sc.group_id = g.id
       WHERE sc.student_id = $1 AND g.code = $2`,
      [studentId, groupCode]
    );
    if (certificate.rows.length === 0) {
      return res.status(404).json({ message: "Certificate not found" });
    }
    const filePath = path.join(
      __dirname,
      "public",
      "certificates",
      certificate.rows[0].certificate_url
    );
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "certificate mavjud emas." });
    }
    fs.accessSync(filePath, fs.constants.F_OK);
    res.sendFile(filePath);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error: error.message });
  }
};
// main process
const createCertificate = async (student, group, origin) => {
  try {
    const generatedURL = `${origin}/certificate/?code=${student?.id}/${group?.code}`;
    await createPdf(student, group, generatedURL);
    await createCertificateUrl(student?.id, group);
  } catch (error) {
    throw error;
  }
};