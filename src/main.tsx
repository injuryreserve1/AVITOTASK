import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import "./app/globalStyles/index.css";
import ThemeProvider from "./app/providers/ThemeProvider/ThemeProvider";
import AppRouter from "./app/providers/RouteProvider/AppRouter";
import QueryProvider from "./app/providers/QueryProvider/QueryProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <ThemeProvider>
        <Suspense>
          <AppRouter />
        </Suspense>
      </ThemeProvider>
    </QueryProvider>
  </StrictMode>,
);
