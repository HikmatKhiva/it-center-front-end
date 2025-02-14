import { pool } from "../../db/db.js";
// save a Message
const createMessage = async (req, res) => {
  try {
    const { full_name, message } = req.body;
    await pool.query(`INSERT INTO messages(full_name,message) VALUES($1,$2)`, [
      full_name,
      message,
    ]);
    return res
      .status(201)
      .json({ message: "xabar muffaqiyatli yozib olindi." });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// get all Messages
const getMessages = async (req, res) => {
  try {
    const { limit, offset } = req.query;
    const total_count = (await pool.query(`SELECT * FROM messages`)).rowCount;
    const messages = await pool.query(
      `SELECT 
        id,
        full_name,
        message,
        TO_CHAR(created_at, 'DD.MM.YYYY') AS created_at
      FROM messages LIMIT $1 OFFSET $2`,
      [limit, offset]
    );
    return res.status(200).json({
      messages: messages.rows,
      total_count,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// delete a Message
const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(`DELETE FROM messages WHERE id = $1`, [id]);
    return res.status(200).json({ message: "Xabar o'chirildi." });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export { createMessage, getMessages, deleteMessage };