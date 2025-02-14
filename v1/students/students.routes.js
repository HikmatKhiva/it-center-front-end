import { Router } from "express";
import {
  createStudent,
  getAllStudents,
  deleteStudent,
  updateStudent,
  filterMonthlyDebtorStudent,
} from "./students.controller.js";
export const studentsRoutes = Router();
studentsRoutes.get("/", getAllStudents);
studentsRoutes.post("/create", createStudent);
studentsRoutes.delete("/:id", deleteStudent);
studentsRoutes.put("/:id", updateStudent);
studentsRoutes.get("/debtors", filterMonthlyDebtorStudent);
