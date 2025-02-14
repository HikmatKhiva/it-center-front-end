import { pool } from "../../db/db.js";
// get all newStudents
const getNewStudents = async (req, res) => {
  try {
    const { is_attend, month, course_time, limit, offset } = req.query;
    const students = await pool.query(
      `
          SELECT 
            ns.id,
            ns.full_name,
            ns.phone,
            ns.course_time,
            ns.is_attend,
            c.name AS course_name,
            TO_CHAR((ns.created_at AT TIME ZONE 'UTC')::timestamp, 'DD.MM.YYYY') AS created_at
          FROM 
            newStudents ns
          INNER JOIN 
            course c ON ns.course_id = c.id
          WHERE 
            EXTRACT(MONTH FROM (ns.created_at AT TIME ZONE 'UTC')) = $1
            AND (
              ns.is_attend IS NULL OR 
              ns.is_attend = '' OR 
              ns.is_attend = $2
            )
            AND LOWER(ns.course_time) LIKE LOWER($5)
            LIMIT $3 OFFSET $4
            `,
      [month, is_attend, limit, offset, course_time]
    );
    const total_count = (await pool.query(`SELECT * FROM students`)).rowCount;
    const total_new = (
      await pool.query(
        `SELECT * FROM newStudents WHERE newStudents.is_attend = 'pending'`
      )
    ).rowCount;
    const course = await pool.query(`    SELECT json_agg(
            json_build_object(
                'value',CAST(c.id AS TEXT),
                'label', c.name
            )
        ) AS course
        FROM course c;`);
    res.status(200).json({
      total_count,
      students: students.rows,
      course: course.rows[0].course,
      total_new,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error });
  }
};
const addNewStudent = async (req, res) => {
  try {
    const { full_name, phone, course_id, course_time } = req.body;
    await pool.query(
      `INSERT INTO newStudents(full_name, phone, course_id, course_time) VALUES ($1, $2, $3, $4)`,
      [full_name, phone, course_id, course_time]
    );
    res.status(201).json({
      message: "Ma'lumotlaringiz bazaga joylandi biz siz bilan bog'lanamiz!",
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
const updateNewStudent = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;
    const result = await pool.query(
      `UPDATE newStudents
       SET is_attend = $1
       WHERE id = $2`,
      [status, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Topilmadi." });
    }
    res.status(200).json({ message: "Ma'lumotlar yangilandi." });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
const deleteNewStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(`DELETE FROM newStudents WHERE id = $1`, [id]);
    res.status(200).json({ message: "Ma'lumotlar o'chirildi." });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export { getNewStudents, addNewStudent, updateNewStudent, deleteNewStudent };
