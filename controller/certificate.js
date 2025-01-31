import { pool } from "../db/db.js";
import createPdf from "../utils/generateCertificate.js";
import path from "path";
import fs from "fs";
import { generateURLCertificate } from "../utils/generateURLCertificate.js";
const __dirname = path.resolve();
const uploadsPath = path.join(__dirname, "public");
export const generateCertificate = async (req, res) => {
  try {
    const { origin } = new URL(req.url, `${req.protocol}://${req.get("host")}`);
    const { id } = req.params;
    const groups = await pool.query(
      `
          SELECT 
            g.id,
            g.code,
            g.is_group_finish,
            g.teacher_id,
            t.first_name,
            t.second_name,
            c.name,
            COALESCE(
              json_agg(
                json_build_object(
                  'id', s.id,
                  'first_name', TRIM(s.first_name),
                  'second_name', TRIM(s.second_name),
                  'group_id', s.group_id,
                  'start_date', s.start_date,
                  'finish_date', s.finish_date,
                  'passport_id', s.passport_id,
                  'course_id', s.course_id,
                  'updated_at', s.updated_at
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
            g.id, g.code, g.teacher_id, t.first_name, t.second_name, c.id
          ORDER BY 
            g.id;
        `,
      [id]
    );
    if (groups.rowCount === 0) {
      return res.status(404).json({ message: "group not found" });
    }
    const students = groups.rows[0].students;
    const group = groups.rows[0];
    if (group.is_group_finish) {
      return res
        .status(400)
        .json({ message: "Guruh sertifiqatlari ilgari tayyorlangan." });
    }
    const newFolder = `${uploadsPath}/${group.code}`;
    if (fs.existsSync(newFolder))
      await updateCertificatesInFolder(students)
      return res.status(400).json({ message: "guruh oldin yaratilgan" });
    fs.mkdirSync(newFolder);
    //
    await Promise.all(
      students.map(async (student) => {
        try {
          const generatedUrl = generateURLCertificate(group?.code, student.id);
          await createCertificateUrl(student?.id, group?.code);
          await createPdf(
            student,
            group?.code,
            newFolder,
            origin + generatedUrl
          );
        } catch (error) {
          console.error(`Error processing student ${student.id}:`, error);
          throw error;
        }
      })
    );
    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createCertificateUrl = async (studentId, groupCode) => {
  try {
    const group = await pool.query(
      `SELECT * FROM groups WHERE groups.code = $1`,
      [groupCode]
    );
    const group_id = group.rows[0]?.id;
    const updateUrl = await pool.query(
      `INSERT INTO students_certificates (certificate_url, student_id, group_id) VALUES ($1, $2, $3)`,
      [`${groupCode}/${studentId}.pdf`, studentId, group_id]
    );
    if (updateUrl.rowCount === 0) {
      throw new Error("O'quvchi id si topilmadi.");
    }
    const update_group = await pool.query(
      `UPDATE groups SET is_group_finish = true WHERE groups.id = $1`,
      [group_id]
    );
    if (update_group.rowCount === 0) {
      throw new Error("Guruh id si topilmadi.");
    }
  } catch (error) {
    throw error;
  }
};

export const findCertificate = async (req, res) => {
  try {
    const { code } = req.query;
    if (typeof code !== "string")
      return res.status(400).json({ error: "Manzil xato" });

    const [studentId, groupCode] = code.split("/");
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
      certificate.rows[0].certificate_url
    );
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "certificate mavjud emas." });
    }

    fs.accessSync(filePath, fs.constants.F_OK);
    res.sendFile(filePath);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateCertificatesInFolder = async () => {
  try {
    
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
