import { Router } from "express";
import { createTeacher, getAllTeacher } from "../controller/teacher.js";
export const teacherRoute = Router();
teacherRoute.get("/", getAllTeacher);
teacherRoute.post("/create", createTeacher);