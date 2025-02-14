import { pool } from "../../db/db.js";
// get all payments
const getPayments = async (req, res) => {
  try {
    const { id } = req.params;
    const payments = await pool.query(
      `SELECT 
            s.id AS student_id,
            s.first_name,
            s.second_name,
            json_agg(
                json_build_object(
                    'amount', p.amount,
                    'date', TO_CHAR(p.payment_date, 'DD.MM.YYYY'),  -- Format the date as DD.MM.YYYY
                    'status', p.status
                )
            ) AS payments
        FROM 
            public.students s
        LEFT JOIN 
            public.payments p ON s.id = p.student_id
        WHERE 
            s.id = $1
        GROUP BY 
            s.id, s.first_name, s.second_name
        ORDER BY 
            s.id;`,
      [id]
    );
    res.status(200).json(payments.rows);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// upload payment a student
const uploadPayments = async (req, res) => {
  try {
    const { student_id, group_id, amount } = req.body;
    console.log(req.body);
    const students = await pool.query(`SELECT * FROM students WHERE id = $1`, [
      student_id,
    ]);
    if (students.rowCount === 0) {
      return res.status(404).json({ message: "O'quvchi topilmadi." });
    }
    const student = students.rows[0];
    if (parseInt(student?.debt) < parseInt(amount)) {
      console.log("run");
      
      return res
        .status(400)
        .json({ message: "To'lov miqdori qarz miqdoridan yuqori!" });
    }
    await pool.query(
      `INSERT INTO public.payments (student_id, group_id, amount) VALUES ($1, $2, $3)`,
      [student_id, group_id, amount]
    );
    res.status(201).json({ message: "To'lov muoffaqiyatli yuklandi." });
  } catch (error) {
    // console.log(error.message);
    return res.status(500).json({ error });
  }
};
export { uploadPayments, getPayments };
