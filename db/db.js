import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import pkg from "pg";
dotenv.config();
const nodeEnv = process.env.NODE_ENV || "development";
if (nodeEnv === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
}
const setting_DB = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
};
// Log environment variables for debugging (be cautious with sensitive data)
// console.log("DB_USER:", setting_DB.user);
// console.log("DB_HOST:", setting_DB.host);
// console.log("DB_PASSWORD:", setting_DB.password); // Sensitive data!
// console.log("DB_PORT:", setting_DB.port);
// console.log("DATABASE:", setting_DB.database);

// Database connection check
const { Pool } = pkg;
export const pool = new Pool(setting_DB);
pool.connect()
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

export const storage = cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
