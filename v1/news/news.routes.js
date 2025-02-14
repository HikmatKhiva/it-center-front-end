import { Router } from "express";
import { upload } from "../../lib/multer.js";
export const newsRoutes = Router();
import {
  createNews,
  deleteNews,
  updateNews,
} from "./news.controller.js";
newsRoutes.post("/create", upload.single("image"), createNews);
newsRoutes.delete("/:id", deleteNews);
newsRoutes.put("/update/:id", upload.single("image"), updateNews);
