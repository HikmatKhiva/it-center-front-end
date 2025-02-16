import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import pkg from "pg";
dotenv.config();
// Determine environment
const nodeEnv = process.env.NODE_ENV || "development"; // Default to 'development'
console.log(process.env.NODE_ENV);
const setting_DB = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
};

// Load environment variables from the appropriate .env file
if (nodeEnv === "production") {
  dotenv.config({ path: ".env.production" });
  (setting_DB.connectionString = process.env.DB_HOST + "?sslmode=require"),
    console.log("Loading environment variables from .env.production"); // for debugging
} else {
  dotenv.config({ path: ".env.development" });
  console.log("Loading environment variables from .env.development"); // for debugging
}
const { Pool } = pkg;
export const pool = new Pool(setting_DB);

// Database connection check
pool
  .connect()
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
// storage
export const storage = cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
