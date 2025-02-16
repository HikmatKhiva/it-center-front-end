import { Router } from "express";
import { getNewStudents } from "./newStudents.controller.js";
export const newStudentRoutes = Router();
newStudentRoutes.get("/", getNewStudents);
