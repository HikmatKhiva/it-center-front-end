import { Schema, model } from "mongoose";
const certificateSchema = new Schema({
  issuedDate: { type: Date, required: true, default: Date.now },
  certificateData: { type: Object, required: true },
});
export const Certificate = model("Certificate", certificateSchema);