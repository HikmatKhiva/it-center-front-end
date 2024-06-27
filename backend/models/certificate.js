import { Schema, Types, model } from "mongoose";
const certificateSchema = new Schema({
  user: { type: Types.ObjectId, ref: "User", required: true },
  issuedDate: { type: Date, required: true, default: Date.now },
  certificateData: { type: Object, required: true },
});
module.exports = model("Certificate", certificateSchema);