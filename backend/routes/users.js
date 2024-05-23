import { Router } from "express";
import { getAllUsers } from "../controller/users.js";
export const userRoute = Router();
userRoute.get("/", getAllUsers);
