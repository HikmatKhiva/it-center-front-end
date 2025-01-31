import { Router } from "express";
import {
  generateCertificate,
  findCertificate,
} from "../controller/certificate.js";
export const certificateRouter = Router();
certificateRouter.get("/", findCertificate);
certificateRouter.post("/generate/:id", generateCertificate);