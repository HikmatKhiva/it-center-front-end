import { Router } from "express";
import { userRoute } from "./users.js";
import { courseRoute } from "./course.js";
import { groupRoute } from "./group.js";
export const controlRoute = Router();
controlRoute.use("/users", userRoute);
controlRoute.use("/course", courseRoute);
controlRoute.use("/group", groupRoute);
