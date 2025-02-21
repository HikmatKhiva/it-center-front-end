import { Router } from "express";
import { getStats } from "../groups/groups.controller.js";
import { getMessages, deleteMessage } from "../messages/messages.controller.js";
import {
  deleteNewStudent,
  getNewStudents,
  updateNewStudent,
} from "../newStudents/newStudents.controller.js";
import {
  downloadGroupZip,
  // Enable2FA,
  getCourseAndTeachers,
  updateProfile,
  uploadImage,
} from "./admin.controller.js";
import { newsRoutes } from "../news/news.routes.js";
import { upload } from "../../lib/multer.js";
export const adminRoutes = Router();
adminRoutes.get("/stats", getStats);
adminRoutes.get("/newStudents", getNewStudents);
adminRoutes.put("/newStudents/update/:id", updateNewStudent);
adminRoutes.delete("/newStudents/:id", deleteNewStudent);
adminRoutes.get("/messages", getMessages);
adminRoutes.delete("/messages/:id", deleteMessage);
adminRoutes.use("/news", newsRoutes);
adminRoutes.get("/forms", getCourseAndTeachers);
adminRoutes.get("/download/certificate/:id", downloadGroupZip);
adminRoutes.post("/upload-image",upload.single("image"), uploadImage);
adminRoutes.post("/update", updateProfile);
// adminRoutes.post("/enable-2fa",Enable2FA);