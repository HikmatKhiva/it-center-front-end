import dotenv from "dotenv";

dotenv.config();

const env = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
};
export default env;
