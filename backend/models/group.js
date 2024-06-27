import { Schema, model } from "mongoose";
const schemaGroup = new Schema({
  name: { type: String },
  createAt: { type: Date, default: Date.now },
});
export const User = model("Group", schemaGroup);