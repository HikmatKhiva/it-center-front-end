import { createBrowserRouter } from "react-router-dom";
// Main Pages
import { LoadHome, LoadContact } from "./pages";
// layouts
import Default from "./layouts/Default";
// lazy loading
import LazyAdminPage from "./loading/LazyAdminPage";
import LazyLoadPage from "./loading/LazyLoadPage";
// Admin Pages
import {
  LoadAdminHome,
  LoadAdminGroup,
  LoadAdminLogin,
  LoadAdminMessages,
  LoadAdminNews,
  LoadAdminGroupId,
  LoadAdminCourse,
  LoadAdminTeachers,
} from "./admin/pages";
// Admin Layout
import { LoadAdminLayout } from "./admin/layouts";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <LazyLoadPage Page={LoadHome} />,
      },
      {
        path: "/contact",
        element: <LazyLoadPage Page={LoadContact} />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LazyAdminPage Page={LoadAdminLayout} />,
    children: [
      {
        path: "main",
        element: <LazyLoadPage Page={LoadAdminHome} />,
      },
      {
        path: "group",
        children: [
          {
            index: true,
            element: <LazyLoadPage Page={LoadAdminGroup} />,
          },
          {
            path: ":id",
            element: <LazyAdminPage Page={LoadAdminGroupId} />,
          },
        ],
      },
      {
        path: "news",
        element: <LazyLoadPage Page={LoadAdminNews} />,
      },
      {
        path: "course",
        element: <LazyLoadPage Page={LoadAdminCourse} />,
      },
      {
        path: "teachers",
        element: <LazyLoadPage Page={LoadAdminTeachers} />,
      },
      {
        path: "messages",
        element: <LazyLoadPage Page={LoadAdminMessages} />,
      },
    ],
  },
  {
    path: "/auth",
    element: <LazyLoadPage Page={LoadAdminLogin} />,
  },
]);
