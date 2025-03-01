import { lazy } from "react";
export const LoadAdminLogin = lazy(() => import("./auth/AdminLogin"));
export const LoadAdminCourse = lazy(() => import("./course/AdminCourse"));
export const LoadAdminGroup = lazy(() => import("./group/AdminGroups"));
export const LoadAdminGroupId = lazy(() => import("./group/AdminGroupId"));
export const LoadAdminMessages = lazy(() => import("./messages/AdminMessages"));
export const LoadAdminNews = lazy(() => import("./news/AdminNews"));
export const LoadAdminNewsCreate = lazy(() => import("./news/AdminNewsCreate"));
export const LoadAdminNewsPreview = lazy(() => import("./news/AdminNewsPreview"));
export const LoadAdminNewsUpdate = lazy(() => import("./news/AdminNewsUpdate"));
export const LoadAdminTeachers = lazy(() => import("./teachers/AdminTeachers"));
export const LoadAdminNewStudents = lazy(() => import("./students/Students"));
export const LoadAdminHome = lazy(() => import("./AdminHome"));
export const LoadNotPage = lazy(() => import("./404Page"));
