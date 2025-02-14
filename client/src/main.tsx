import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { routes } from "./Router.tsx";
import { RouterProvider } from "react-router-dom";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// devtool
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { Provider } from "react-redux";
import { store } from "./lib/redux/app.ts";
// Create a client
const queryClient = new QueryClient();
const theme = createTheme({
  breakpoints: {},
  fontSizes: {
    lg: "16px",
  },
  /** Put your mantine theme override here */
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* tanstack query wrapper */}
    <QueryClientProvider client={queryClient}>
      {/* mantine ui wrapper */}
      <MantineProvider theme={theme}>
        {/* redux wrapper */}
        <Provider store={store}>
          {/* react-router */}
          <RouterProvider router={routes} />
        </Provider>
        {/* mantine notification component */}
        <Notifications />
      </MantineProvider>
      {/* tanstack query devtool */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);