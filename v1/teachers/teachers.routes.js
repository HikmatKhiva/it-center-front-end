import { Router } from "express";
import {
  createTeacher,
  getAllTeacher,
  updateTeacher,
  deleteTeacher,
} from "./teachers.controller.js";
export const teachersRoutes = Router();
teachersRoutes.get("/", getAllTeacher);
teachersRoutes.post("/create", createTeacher);
teachersRoutes.put("/:id", updateTeacher);
teachersRoutes.delete("/:id", deleteTeacher);
