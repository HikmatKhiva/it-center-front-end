import { createBrowserRouter } from "react-router-dom";
// Main Pages
import {
  LoadHomePage,
  LoadContactPage,
  LoadNewsPage,
  LoadNewsPreview,
} from "./pages";
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
  LoadAdminNewsCreate,
  LoadAdminNewStudents,
  LoadAdminNewsPreview,
  LoadAdminNewsUpdate,
  LoadNotPage,
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
        element: <LazyLoadPage Page={LoadHomePage} />,
      },
      {
        path: "/contact",
        element: <LazyLoadPage Page={LoadContactPage} />,
      },
      {
        path: "/news",
        children: [
          {
            index: true,
            element: <LazyLoadPage Page={LoadNewsPage} />,
          },
          {
            path: ":id",
            element: <LazyLoadPage Page={LoadNewsPreview} />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <LazyAdminPage Page={LoadAdminLayout} />,
    children: [
      {
        path: "main",
        element: <LazyAdminPage Page={LoadAdminHome} />,
      },
      {
        path: "group",
        children: [
          {
            index: true,
            element: <LazyAdminPage Page={LoadAdminGroup} />,
          },
          {
            path: ":id",
            element: <LazyAdminPage Page={LoadAdminGroupId} />,
          },
        ],
      },
      {
        path: "news",
        children: [
          {
            index: true,
            element: <LazyAdminPage Page={LoadAdminNews} />,
          },
          {
            path: "create",
            element: <LazyAdminPage Page={LoadAdminNewsCreate} />,
          },
          {
            path: ":id",
            element: <LazyAdminPage Page={LoadAdminNewsPreview} />,
          },
          {
            path: "update/:id",
            element: <LazyAdminPage Page={LoadAdminNewsUpdate} />,
          },
        ],
      },
      {
        path: "course",
        element: <LazyAdminPage Page={LoadAdminCourse} />,
      },
      {
        path: "teachers",
        element: <LazyAdminPage Page={LoadAdminTeachers} />,
      },
      {
        path: "messages",
        element: <LazyAdminPage Page={LoadAdminMessages} />,
      },
      {
        path: "students",
        element: <LazyAdminPage Page={LoadAdminNewStudents} />,
      },
    ],
  },
  {
    path: "/auth",
    element: <LazyLoadPage Page={LoadAdminLogin} />,
  },
  {
    path: "*",
    element: <LazyLoadPage Page={LoadNotPage} />,
  },
]);
