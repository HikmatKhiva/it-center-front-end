import { Router } from "express";
import { getAllUsers, createUser } from "../controller/users.js";
export const userRoute = Router();
userRoute.get("/", getAllUsers);
userRoute.post("/create/:idGroup", createUser);
