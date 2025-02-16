import { pool } from "../../db/db.js";
// getAll groups
const getAllGroup = async (req, res) => {
  try {
    const { name, is_group_finished } = req.query;
    const groups = await pool.query(
      `SELECT 
        groups.id,
        groups.code,
        groups.is_group_finished,
        groups.name,
        TO_CHAR((groups.created_at AT TIME ZONE 'UTC')::timestamp, 'DD.MM.YYYY') AS created_at, 
        COALESCE(
            json_agg(
                json_build_object(
                    'id', students.id,
                    'first_name', TRIM(students.first_name),
                    'second_name', TRIM(students.second_name),
                    'passport_id', students.passport_id
                ) ORDER BY students.id ASC
            ) FILTER (WHERE students.id IS NOT NULL), 
            '[]'::json 
        ) AS students,
        TRIM(teachers.first_name) AS teacher_name,
        course.name AS course_name
      FROM groups
      LEFT JOIN students ON groups.id = students.group_id
      LEFT JOIN teachers ON groups.teacher_id = teachers.id 
      LEFT JOIN course ON groups.course_id = course.id 
      WHERE LOWER(groups.name) LIKE LOWER($1)
      AND ($2::boolean IS NULL OR groups.is_group_finished = $2::boolean)  
      GROUP BY 
          groups.id, 
          groups.code, 
          groups.is_group_finished, 
          groups.name, 
          groups.created_at, 
          teachers.first_name, 
          course.name
      ORDER BY groups.id ASC;`,
      [`%${name || ""}%`, is_group_finished]
    );
    return res.status(200).json(groups.rows);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// create a group
const createGroup = async (req, res) => {
  try {
    let { teacher_id, name, course_id, duration, price, group_time } = req.body;
    // avoid sql inject code
    if (typeof name !== "string" || typeof teacher_id !== "string") {
      return res.status(400).send("Invalid input type");
    }
    const durationString = `${duration} month${duration > 1 ? "s" : ""}`;
    await pool.query(
      `INSERT INTO public.groups (teacher_id, name, course_id, duration, price, group_time) VALUES ($1, $2, $3, $4, $5, $6)`,
      [teacher_id, name, course_id, durationString, price, group_time]
    );
    return res.status(201).json({ message: "Guruh muoffaqiyatli yaratildi." });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// get a group
const getGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const group = await pool.query(
      `SELECT 
      groups.id,
      groups.code,
      groups.is_group_finished,
      groups.name,
      groups.price AS price_per_month,
      CASE 
          WHEN SPLIT_PART(groups.duration, ' ', 1) ~ E'^[0-9]+$' THEN 
              (groups.price * CAST(SPLIT_PART(groups.duration, ' ', 1) AS DECIMAL))
          ELSE NULL -- Handle non-numeric durations
      END AS total_cost,
      TO_CHAR((groups.created_at AT TIME ZONE 'UTC')::timestamp, 'DD.MM.YYYY') AS created_at,
      TO_CHAR((groups.finished_date AT TIME ZONE 'UTC')::timestamp, 'DD.MM.YYYY') AS finished_date,
      CASE 
          WHEN SPLIT_PART(groups.duration, ' ', 1) ~ E'^[0-9]+$' THEN 
              TO_CHAR(
                  (
                      groups.created_at + 
                      (CAST(SPLIT_PART(groups.duration, ' ', 1) AS INTEGER) * INTERVAL '1 month')
                  ) AT TIME ZONE 'UTC', 
                  'DD.MM.YYYY'
              )
          ELSE NULL 
      END AS end_date,
      COALESCE(
          json_agg(
              json_build_object(
                  'id', students.id,
                  'first_name', TRIM(students.first_name),
                  'second_name', TRIM(students.second_name),
                  'passport_id', students.passport_id,
                  'gender', students.gender,
                  'debt', students.debt,
                  'certificate_url', students_certificates.certificate_url
              ) ORDER BY students.id ASC
          ) FILTER (WHERE students.id IS NOT NULL),
          '[]'::json  
      ) AS students,
      course.id AS course_id  
        FROM 
        groups
        LEFT JOIN 
        students ON groups.id = students.group_id
        LEFT JOIN 
        course ON groups.course_id = course.id  
        LEFT JOIN 
        students_certificates ON students.id = students_certificates.student_id
        WHERE 
        groups.id = $1
        GROUP BY 
        groups.id, 
        groups.code,  
        groups.is_group_finished, 
        groups.name, 
        groups.price,
        groups.duration,
        course.id  
        ORDER BY 
        groups.id ASC;
    `,
      [id]
    );
    if (group.rows.length === 0) {
      return res.status(404).json({ message: "Guruh topilmadi." });
    }
    return res.status(200).json(group.rows[0]);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// delete a group
const deleteGroup = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(`DELETE FROM groups WHERE id = $1`, [id]);
    return res.status(200).json({ message: "Guruh muoffaqiyatli o'chirildi" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// ========================================
const getNewGroups = async (req, res) => {
  try {
    const groups = await pool.query(`SELECT 
      c.name AS "course_name",
      t.first_name AS "teacher",
      g.group_time,
      TO_CHAR(g.created_at + INTERVAL '1 week', 'DD.MM.YYYY') AS "admission_end"
    FROM 
      groups g
    JOIN 
      groups gc ON g.id = gc.id
    JOIN 
      course c ON gc.course_id = c.id
    JOIN 
      teachers t ON gc.teacher_id = t.id
    WHERE 
      g.created_at >= NOW() - INTERVAL '1 week'
    AND g.is_group_finished = FALSE;
    `);
    return res.status(200).json(groups.rows);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
const getStats = async (req, res) => {
  try {
    const data = await pool.query(
      `SELECT 
      (
          SELECT COUNT(s.id)
          FROM students s
          JOIN public.groups g ON s.group_id = g.id
          WHERE  NOT(g.is_group_finished)
      ) AS active_students_count,
      (SELECT COUNT(*) FROM public.groups WHERE is_group_finished = FALSE) AS active_groups_count,
      (SELECT COUNT(*) FROM teachers) AS total_teachers_count,
      (SELECT COUNT(*) FROM course) AS total_courses_count;
 `
    );
    res.status(200).json(data.rows);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export {
  getAllGroup,
  createGroup,
  getGroup,
  deleteGroup,
  getNewGroups,
  getStats,
};
