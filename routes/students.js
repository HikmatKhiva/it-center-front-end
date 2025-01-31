import { Router } from "express";
import {
  createStudent,
  getAllStudents,
  deleteStudent,
  editStudent,
} from "../controller/student.js";
export const studentRoute = Router();
studentRoute.get("/", getAllStudents);
studentRoute.post("/create", createStudent);
studentRoute.delete("/:id", deleteStudent);
studentRoute.put("/:id", editStudent);
