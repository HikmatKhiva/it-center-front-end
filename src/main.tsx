import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/* React Toastify css */
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Route.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/app.ts";
import PageLoading from "./loadings/PageLoading.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// Lazy Load css
import "react-lazy-load-image-component/src/effects/blur.css";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<PageLoading />} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>
);
