import { Schema, model,Types } from "mongoose";
const schemaGroup = new Schema({
  name: { type: String },
  createAt: { type: Date, default: Date.now },
  users: [{ type: Types.ObjectId, ref: 'User' }]
});
export const Group = model("Group", schemaGroup);