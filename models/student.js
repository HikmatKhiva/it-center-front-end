import { pool } from "../db/db";

class Students {
  static async getStudentsData() {
    const students = await pool.query(`SELECT * FROM students`);
    return students;
  }
}
