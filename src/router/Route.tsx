import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import LazyLoadRoutes from "../loadings/LazyLoadPage";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: LazyLoadRoutes("Home"),
      },
      {
        path: "/about-us",
        element: LazyLoadRoutes("About"),
      },
      {
        path: "/news",
        element: LazyLoadRoutes("News"),
      },
      {
        path: "/news/:title",
        element: LazyLoadRoutes("NewsPreview"),
        loader: ({ params }) => params.title ?? "",
      },
      {
        path: "/course",
        element: LazyLoadRoutes("Course"),
      },
      {
        path: "/contact",
        element: LazyLoadRoutes("Contact"),
      },
      {
        path: "*",
        element: LazyLoadRoutes("NotFound"),
      },
    ],
  },
]);
