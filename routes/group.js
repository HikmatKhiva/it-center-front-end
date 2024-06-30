import { Router } from "express";
import { createGroup, getAllGroup } from "../controller/group.js";
export const groupRoute = Router();
groupRoute.get("/", getAllGroup);
groupRoute.post("/create", createGroup);
