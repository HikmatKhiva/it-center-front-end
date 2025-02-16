import { Router } from "express";
import { studentsRoutes } from "./students/students.routes.js";
import { certificateRoutes } from "./certificates/certificates.routes.js";
import { courseRoutes } from "./courses/courses.routes.js";
import { groupRoutes } from "./groups/groups.routes.js";
import { teachersRoutes } from "./teachers/teachers.routes.js";
import { paymentsRoutes } from "./payments/payments.routes.js";
import { adminRoutes } from "./admin/admin.routes.js";
// controllers
import { addNewStudent } from "./newStudents/newStudents.controller.js";
import { createMessage } from "./messages/messages.controller.js";
import { getNewGroups } from "./groups/groups.controller.js";
import { middlewareAdmin } from "../middleware/admin.middleware.js";
import { getAllNews, getNews } from "./news/news.controller.js";
import { getAllCourse } from "./courses/courses.controller.js";
import { adminLogin, Verify2FA } from "./admin/admin.controller.js";
export const V1Routes = Router();
// checking admin middleware
V1Routes.use("/students", middlewareAdmin, studentsRoutes);
V1Routes.use("/certificate", middlewareAdmin, certificateRoutes);
V1Routes.use("/course", middlewareAdmin, courseRoutes);
V1Routes.use("/group", middlewareAdmin, groupRoutes);
V1Routes.use("/teachers", middlewareAdmin, teachersRoutes);
V1Routes.use("/payment", middlewareAdmin, paymentsRoutes);
V1Routes.use("/admin", middlewareAdmin, adminRoutes);

// without admin middleware routes
V1Routes.post("/newStudents/add", addNewStudent);
V1Routes.post("/message/create", createMessage);
V1Routes.get("/opened/group", getNewGroups);
V1Routes.get("/news", getAllNews);
V1Routes.get("/news/:id", getNews);
V1Routes.get("/list", getAllCourse);
V1Routes.post("/auth/admin/login",adminLogin)
V1Routes.post("/auth/admin/verify-2fa",Verify2FA)
