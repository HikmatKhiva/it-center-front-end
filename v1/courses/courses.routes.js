import { Router } from "express";
import { createCourse, getAllCourse,deleteCourse,updateCourse } from "./courses.controller.js";
export const courseRoutes = Router();
courseRoutes.get("/", getAllCourse);
courseRoutes.post("/create", createCourse);
courseRoutes.put('/update/:id',updateCourse)
courseRoutes.delete('/:id',deleteCourse)