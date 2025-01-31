import { Router } from "express";
import { createCourse, getAllCourse,deleteCourse,updateCourse } from "../controller/course.js";
export const courseRoute = Router();
courseRoute.get("/", getAllCourse);
courseRoute.post("/create", createCourse);
courseRoute.put('/update/:id',updateCourse)
courseRoute.delete('/:id',deleteCourse)

