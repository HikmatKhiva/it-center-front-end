import { pool } from "../db/db.js";
// get all users
const getAllStudents = async (req, res) => {
  try {
    const users = await pool.query(
      `SELECT * FROM students ORDER BY students.id ASC`
    );
    res.status(200).json(users.rows);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error });
  }
};
// create a user
const createStudent = async (req, res) => {
  try {
    const {
      first_name,
      second_name,
      passport_id,
      group_id,
      course_id,
      gender,
    } = req.body;
    console.log(req.body);

    if (!first_name || !second_name) {
      return res
        .status(400)
        .json({ message: "o'quvchini ism familyasi bo'lishi shart." });
    }
    await pool.query(
      `INSERT INTO students (first_name,second_name,passport_id,group_id,course_id,gender) VALUES ($1,$2,$3,$4,$5,$6)`,
      [first_name, second_name, passport_id, group_id, course_id, gender]
    );
    return res
      .status(201)
      .json({ message: "O'quvchi muoffaqiyatli yaratildi" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// editStudent
const editStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, second_name, passport_id, gender } = req.body;

    await pool.query(
      `UPDATE students 
       SET 
         first_name = COALESCE($2, first_name),
         second_name = COALESCE($3, second_name),
         passport_id = COALESCE($4, passport_id),
         gender = COALESCE($5, gender)
       WHERE id = $1 
       RETURNING *`,
      [id, first_name, second_name, passport_id, gender]
    );

    res.status(200).json({ message: "O'quvchi muoffaqiyatli yangilandi" });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error });
  }
};
// delete a student
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(`DELETE FROM students WHERE students.id = $1`, [id]);
    res.status(200).json({ message: "O'quvchi muoffaqiyatli o'chirildi." });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export { getAllStudents, createStudent, deleteStudent, editStudent };
