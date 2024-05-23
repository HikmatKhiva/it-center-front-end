import { Router } from "express";
import users from "./users.js";
export const controlRoute = Router();
controlRoute.use("/users", users);