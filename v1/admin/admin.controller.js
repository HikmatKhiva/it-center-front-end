import { v2 as cloudinary } from "cloudinary";
import { pool } from "../../db/db.js";
import bcrypt from "bcrypt";
import { TOTP } from "otpauth";
import * as crypto from "crypto";
import pkg from "hi-base32";
import jwt from "jsonwebtoken";
const { encode } = pkg;
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import { zipFolder } from "../../utils/zipFolder.js";
dotenv.config();
const unlinkAsync = promisify(fs.unlink); // Promisify fs.unlink for async/await
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
      return res.status(400).json({
        message: "Parol xato iltimos tekshirib qayta urinib ko'ring.",
      });
    }
    res.status(200).json({
      message: "Login Admin",
      nextStep: true,
    });
  } catch (error) {
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
    if (delta === null) {
      return res.status(401).json({
        status: "fail",
        message: "Authenticator code xato.",
      });
    }
    const jwToken = jwt.sign({ email, token }, jwtSecret, { expiresIn: "3d" });
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

const downloadGroupZip = async (req, res) => {
  try {
    const __dirname = path.resolve();
    const { id } = req.params;
    const group = (
      await pool.query(`SELECT code FROM groups WHERE id = $1`, [id])
    ).rows;
    if (group.length === 0) {
      res.status(404).json({ message: "Guruh topilmadi." });
    }
    const groupCode = group[0].code;
    const folderPath = path.join(
      __dirname,
      "public",
      "certificates",
      groupCode
    );
    await zipFolder(folderPath, groupCode);
    const zipFilePath = path.join(__dirname, "temp", `${groupCode}.zip`);
    // 2. Stream the zip file to the response
    const fileStream = fs.createReadStream(zipFilePath);

    res.set("Content-Disposition", `attachment; filename="${groupCode}.zip"`);
    res.set("Content-Type", "application/zip");
    res.status(200);

    fileStream.pipe(res); // Pipe the file stream to the response
    // 3. Handle stream completion and errors
    fileStream.on("end", async () => {
      try {
        await unlinkAsync(zipFilePath); // Use await with promisified unlink
        console.log(`Successfully deleted ${zipFilePath}`);
      } catch (unlinkError) {
        console.error(`Error deleting ${zipFilePath}:`, unlinkError);
        // Log the error but don't throw, as the response has already been sent.
      }
    });
    fileStream.on("error", (streamError) => {
      console.error("Error streaming file:", streamError);
      // If an error occurs during streaming, you can't change the headers or status code.
      // You can log the error and potentially send a generic error message to the client if possible.
      if (!res.headersSent) {
        res.status(500).send("Error streaming file.");
      }
    });
    return;
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const uploadImage = async (req, res) => {
  try {
    const image = req.file;
    const { email } = req.body;
    const find = await pool.query(`SELECT * FROM admin WHERE email = $1`, [
      email,
    ]);
    if (find.rowCount === 0) {
      return res.status(404).json({ message: "Hisob topilmadi" });
    }
    await cloudinary.uploader
      .upload(image?.path, {
        folder: "admin",
      })
      .then(async (result) => {
        await pool.query(`UPDATE admin SET photo_url = $1 WHERE email = $2`, [
          result?.url,
          email,
        ]);
        fs.unlinkSync(image.path);
        return res
          .status(200)
          .json({ message: "Surat yuklandi.", photo_url: result?.url });
      });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
const updateProfile = async (req, res) => {
  const { email, username } = req.body;
  const find = await pool.query(`SELECT * FROM admin WHERE email = $1`, [
    email,
  ]);
  if (find.rowCount === 0) {
    return res.status(404).json({ message: "Hisob topilmadi" });
  }
  await pool.query(
    `UPDATE admin SET 
      email = COALESCE($1, email), 
      username =COALESCE($2, username)
      WHERE email = $1`,
    [email, username]
  );
  res
    .status(200)
    .json({
      message: "Hisob ma'lumotlari yangilandi.",
      admin: { email, username },
    });
};
export {
  adminLogin,
  Enable2FA,
  Verify2FA,
  getCourseAndTeachers,
  downloadGroupZip,
  uploadImage,
  updateProfile,
};
