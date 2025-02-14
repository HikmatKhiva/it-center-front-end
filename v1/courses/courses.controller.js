import { pool } from "../../db/db.js";
// getAll courses
const getAllCourse = async (req, res) => {
  try {
    const courses = await pool.query(`
      SELECT course.id, course.name,course.price,
      TO_CHAR((course.created_at AT TIME ZONE 'UTC')::timestamp, 'DD.MM.YYYY') AS created_at, 
           (
             SELECT json_build_object(
               'id', teachers.id,
               'first_name', teachers.first_name
             )
             FROM teachers
             WHERE teachers.id = course.teacher_id
           ) as teacher FROM course
`);
    return res.status(200).json(courses.rows);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// create a course
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
// update a course
const updateCourse = async (req, res) => {
  try {
    const { name, teacher_id, price } = req.body;
    const { id } = req.params;
    await pool.query(
      `UPDATE course SET 
      name = COALESCE($1,name),
      teacher_id = COALESCE($2, teacher_id),
      price =  COALESCE($3,price)
      WHERE course.id = $4`,
      [name, teacher_id, price, id]
    );
    res.status(200).json({
      message: "kurs muffaqiyatli yangilandi.",
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// delete a course
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