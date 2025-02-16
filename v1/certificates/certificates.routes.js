import { Router } from "express";
import {
  generateCertificate,
} from "./certificates.controller.js";
export const certificateRoutes = Router();
certificateRoutes.post("/generate/:id", generateCertificate);