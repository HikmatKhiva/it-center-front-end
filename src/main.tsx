import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/* React Toastify css */
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Route.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/app.ts";
import Loading from "./loadings/Loading.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </Provider>
  </React.StrictMode>
);