import { Router } from "express";
import { createCourse, getAllCourse } from "../controller/course.js";
export const courseRoute = Router();
courseRoute.get("/", getAllCourse);
courseRoute.post("/create", createCourse);
