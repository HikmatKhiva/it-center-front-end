// import { connect } from "mongoose";
import dotenv from "dotenv";
import pkg from "pg";
dotenv.config();
const { Pool } = pkg;
let setting_DB;

setting_DB = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
};
if (process.env.NODE_ENV === "development") {
  console.log(setting_DB);
}
if (process.env.NODE_ENV === "production") {
  setting_DB = {
    connectionString: process.env.POSTGRESQL_URL + "?sslmode=require",
  };
}
export const pool = new Pool(setting_DB);
// const { MongoUrl } = process.env;
// export const connectDatabase = async () => {
//   try {
//     await connect(MongoUrl);
//     console.log("Connect to database");
//   } catch (error) {
//     console.log(error);
//     process.exit();
//   }
// };
