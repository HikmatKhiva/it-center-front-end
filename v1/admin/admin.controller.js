import { pool } from "../../db/db.js";
import bcrypt from "bcrypt";
import { TOTP } from "otpauth";
import * as crypto from "crypto";
import pkg from "hi-base32";
import jwt from "jsonwebtoken";
const { encode } = pkg;
import dotenv from "dotenv";
dotenv.config();
const jwtSecret = process.env.jwtSecret;
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const find = await pool.query("SELECT * FROM admin WHERE email = $1", [
      email,
    ]);
    if (find.rowCount === 0) {
      return res.status(400).json({ message: "admin not found!" });
    }

    const admin = find.rows[0];
    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) {
      return res
        .status(400)
        .json({ message: "password invalid please check password" });
    }
    res.status(200).json({
      message: "Login Admin",
      nextStep: true,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
};

const Enable2FA = async (req, res) => {
  try {
    const { email } = req.body;
    const admin = await pool.query("SELECT * FROM admin WHERE email = $1", [
      email,
    ]);
    if (admin.rowCount == 0) {
      return res.status(404).json("admin not found");
    }
    const base32_secret = generateBase32Secret();
    await pool.query("UPDATE admin SET secret = $1 WHERE email = $2", [
      base32_secret,
      email,
    ]);
    new TOTP({
      issuer: "it-khiva.uz",
      label: "IT_khiva_Manager",
      algorithm: "SHA1",
      digits: 6,
      secret: base32_secret,
    });
    res.json({
      status: "success",
      data: {
        secret: base32_secret,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const Verify2FA = async (req, res) => {
  try {
    const { email, token } = req.body;
    const find = await pool.query(
      "SELECT email,username,photo_url,secret FROM admin WHERE email = $1",
      [email]
    );
    if (find.rowCount == 0) {
      return res.status(404).json("admin not found");
    }
    const admin = find.rows[0];
    const totp = new TOTP({
      issuer: "it-khiva.uz",
      label: "IT_khiva_Manager",
      algorithm: "SHA1",
      digits: 6,
      secret: admin?.secret,
    });

    const delta = totp.validate({ token });
    const jwToken = jwt.sign({ email, token }, jwtSecret, { expiresIn: "3d" });
    if (delta === null) {
      return res.status(401).json({
        status: "fail",
        message: "Authenticator code xato.",
      });
    }
    return res.json({
      message: "Authentication successful",
      admin: {
        email: admin.email,
        username: admin.username,
        photo_url: admin.photo_url,
        token: jwToken,
      },
    });
  } catch (error) {
    console.error("Error during 2FA verification:", error); // Use console.error for errors
    res.status(500).json({ message: "Internal server error" });
  }
};

const generateBase32Secret = () => {
  const buffer = crypto.randomBytes(15);
  const base32 = encode(buffer).replace(/=/g, "").substring(0, 24);
  return base32;
};

const getCourseAndTeachers = async (req, res) => {
  try {
    const teachers = await pool.query(`
        SELECT json_agg(
            json_build_object(
                'value', CAST(t.id AS TEXT),
                'label', t.first_name
            )
        ) AS teachers
        FROM teachers t;
    `);
    const courses = await pool.query(`
       SELECT json_agg(
            json_build_object(
                'value',CAST(c.id AS TEXT),
                'label', c.name
            )
        ) AS course
        FROM course c;
    `);
    return res.status(200).json({
      courses: courses.rows[0]?.course,
      teachers: teachers.rows[0].teachers,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export { adminLogin, Enable2FA, Verify2FA, getCourseAndTeachers };
