import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routes } from "./Router.tsx";
import { RouterProvider } from "react-router-dom";
import { createTheme, MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Notifications } from "@mantine/notifications";
import { Provider } from "react-redux";
import { store } from "./lib/redux/app.ts";
// devtool
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// css imports
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

// import NavigationProgressComponent from "./loading/NavigationProgressComponent.tsx";
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
        {/* <NavigationProgressComponent /> */}
      </MantineProvider>
      {/* tanstack query devtool */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
