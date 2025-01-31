import { pool } from "../db/db.js";
// getAll teacher
const getAllTeacher = async (req, res) => {
  try {
    const teachers = await pool.query("SELECT * FROM teachers");
    return res.status(200).json(teachers.rows);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// create a teacher
const createTeacher = async (req, res) => {
  try {
    const { first_name, second_name } = req.body;
    await pool.query(
      `INSERT INTO teachers (first_name,second_name) VALUES ($1,$2)`,
      [first_name, second_name]
    );
    return res.status(201).json({ message: "Ustoz muoffaqiyatli yaratildi." });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// update a teacher
const editTeacher = async (req, res) => {
  try {
    const { first_name, second_name } = req.body;
    const { id } = req.params;
    await pool.query(
      `UPDATE teachers SET 
      COALESCE($1, first_name),
      COALESCE($2, second_name)
      WHERE teachers.id = $3`,
      [first_name, second_name, id]
    );
    return res.status(200).json({ message: "Ustoz muoffaqiyatli yangilandi." });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// delete a teacher
const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(`DELETE FROM teachers WHERE teachers.id = $1`, [id]);
    return res.status(200).json({ message: "Ustoz muoffaqiyatli o'chirildi." });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export { getAllTeacher, createTeacher, editTeacher, deleteTeacher };