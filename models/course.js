import { Schema, model } from "mongoose";
const schemaCourse = new Schema({
  title: { type: String, required: true,unique:true },
  teacher: { type: String },
  createdAt: { type: Date, default: Date.now },
});
export const Course = model("Course", schemaCourse);
