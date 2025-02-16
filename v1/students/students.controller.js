import { pool } from "../../db/db.js";
// get all users
const getAllStudents = async (req, res) => {
  try {
    const users = await pool.query(
      `SELECT * FROM students ORDER BY students.id ASC`
    );
    res.status(200).json(users.rows);
  } catch (error) {
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
    if (!first_name || !second_name) {
      return res
        .status(400)
        .json({ message: "o'quvchini ism familyasi bo'lishi shart." });
    }
    // Check length constraints
    if (
      first_name.length > 50 ||
      second_name.length > 50 ||
      passport_id.length > 20
    ) {
      return res
        .status(400)
        .json({ message: "Input values exceed length constraints." });
    }
    await pool.query(
      `INSERT INTO students (first_name, second_name, passport_id, group_id, course_id, gender) VALUES ($1, $2, $3, $4, $5, $6)`,
      [first_name, second_name, passport_id, group_id, course_id, gender]
    );

    return res
      .status(201)
      .json({ message: "O'quvchi muoffaqiyatli yaratildi" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// update student
const updateStudent = async (req, res) => {
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
    return res.status(500).json({ error });
  }
};
// filter students
const filterMonthlyDebtorStudent = async (req, res) => {
  try {
    const students = await pool.query(
      ` SELECT 
        s.id AS student_id,
        CONCAT(s.first_name, ' ', s.second_name) AS student_full_name,
        s.passport_id AS passport_id,
        g.price AS group_price,
        g.name AS group_name,
        t.first_name AS teacher_name,
        CASE 
            WHEN MAX(p.payment_date) IS NULL THEN 'No payments' 
            ELSE TO_CHAR(MAX(p.payment_date), 'DD.MM.YYYY') 
        END AS last_payment_date,
        COALESCE(SUM(p.amount), 0) AS total_paid_this_month
        FROM 
            public.students s
        JOIN 
            public.groups g ON s.group_id = g.id
        LEFT JOIN 
            public.payments p ON s.id = p.student_id AND EXTRACT(MONTH FROM p.payment_date) = EXTRACT(MONTH FROM CURRENT_DATE)
        JOIN  
            public.teachers t ON g.teacher_id = t.id
        GROUP BY 
        s.id, s.first_name, g.id, g.name, t.first_name
        HAVING COALESCE(SUM(p.amount), 0) < g.price;
        `
    );
    res.status(200).json(students.rows);
  } catch (error) {
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
export {
  getAllStudents,
  createStudent,
  deleteStudent,
  updateStudent,
  filterMonthlyDebtorStudent,
};
