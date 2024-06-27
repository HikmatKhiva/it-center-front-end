import { Schema, Types, model } from "mongoose";
const schemaUser = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  gender: { type: String, required: true },
  phone: { type: String },
  course: { type: String, required: true },
  birth_date: { type: String, required: true },
  createdTime: { type: Date, default: Date.now },
  group_id: { type: Types.ObjectId, ref: "Group" },
});
export const User = model("Users", schemaUser);
