import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import LazyLoadRoutes from "../loadings/LazyLoadPage";
import { Error } from "../loadings";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: LazyLoadRoutes("Home"),
      },
      {
        path: "/team",
        element: LazyLoadRoutes("About"),
      },
      {
        path: "/news",
        element: LazyLoadRoutes("News"),
      },
      {
        path: "/news/:title",
        element: LazyLoadRoutes("NewsPreview"),
        loader: ({ params }) => params ?? "",
      },
      {
        path: "/course",
        element: LazyLoadRoutes("Course"),
      },
      {
        path: "/contact",
        element: LazyLoadRoutes("Contact"),
        children: [
          {
            index: true,
            element: LazyLoadRoutes("Application"),
          },
          {
            path: "complaint",
            element: LazyLoadRoutes("Complaint"),
          },
        ],
      },
      {
        path: "/about-us",
        element: LazyLoadRoutes("AboutUs"),
      },
      {
        path: "*",
        element: LazyLoadRoutes("NotFound"),
      },
    ],
  },
]);