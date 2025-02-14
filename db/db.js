import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import pkg from "pg";
dotenv.config();
const { Pool } = pkg;
const setting_DB = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
};
export const pool = new Pool(setting_DB);
// storage
export const storage = cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
