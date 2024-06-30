import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const { MongoUrl } = process.env;
export const connectDatabase = async () => {
  try {
    await connect(MongoUrl);
    console.log("Connect to database");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
