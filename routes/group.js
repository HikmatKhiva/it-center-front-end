import { Router } from "express";
import { createGroup, getAllGroup,getGroup } from "../controller/group.js";
export const groupRoute = Router();
groupRoute.get("/", getAllGroup);
groupRoute.post("/create", createGroup);
groupRoute.get("/:id", getGroup);
