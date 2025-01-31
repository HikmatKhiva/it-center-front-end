import { pool } from "../db/db.js";
// getAll group
const getAllCourse = async (req, res) => {
  try {
    // const courses = await pool.query(`
    //   SELECT course.id, course.name,
    //       (
    //         SELECT json_build_object(
    //           'id', teachers.id,
    //           'first_name', teachers.first_name,
    //           'second_name', teachers.second_name
    //         )
    //         FROM teachers
    //         WHERE teachers.id = course.teacher_id
    //       ) as teacher FROM course`);
    const courses = await pool.query(`
      SELECT course.id, course.name,price,
      TO_CHAR((course.created_at AT TIME ZONE 'UTC')::timestamp, 'DD.MM.YYYY') AS created_at, 
      teachers.first_name AS teacher_name
      FROM 
          course 
      JOIN 
      teachers ON teachers.id = course.teacher_id;
`);
    return res.status(200).json(courses.rows);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// create a group
const createCourse = async (req, res) => {
  try {
    const { name, teacher_id, price } = req.body;
    await pool.query(
      `
        INSERT INTO course(name, teacher_id, price)
        SELECT $1,$2,$3
        WHERE EXISTS (SELECT 1 FROM teachers WHERE id = $2)  
      `,
      [name, teacher_id, price]
    );

    return res.status(201).json({ message: "kurs muffaqiyatli yaratildi." });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// edit course
const updateCourse = async (req, res) => {
  try {
    const { name, teacher_id } = req.body;
    const { id } = req.params;
    await pool.query(
      `UPDATE course SET 
      name = COALESCE($1,name),
      teacher_id = COALESCE($2, teacher_id),
      WHERE course.id = $3`,
      [name, teacher_id, id]
    );

    res.status(200).json({
      message: "kurs muffaqiyatli yangilandi.",
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// delete course
const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(`DELETE FROM course WHERE course.id = $1`, [id]);
    return res.status(200).json({ message: "kurs muffaqiyatli o'chirildi." });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export { getAllCourse, createCourse, deleteCourse, updateCourse };
