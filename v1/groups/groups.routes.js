import { Router } from "express";
import {
  createGroup,
  getAllGroup,
  getGroup,
  deleteGroup,
} from "./groups.controller.js";
export const groupRoutes = Router();
groupRoutes.get("/", getAllGroup);
groupRoutes.post("/create", createGroup);
groupRoutes.get("/:id", getGroup);
groupRoutes.delete("/:id", deleteGroup);
