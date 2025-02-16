import { Router } from "express";
import { getPayments, uploadPayments } from "./payments.controller.js";
export const paymentsRoutes = Router();
paymentsRoutes.post("/create", uploadPayments);
paymentsRoutes.get("/:id", getPayments);
