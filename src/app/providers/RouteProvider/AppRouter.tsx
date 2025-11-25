import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Navigate,
} from "react-router";
import { routeConfig } from "./routeConfig";
import App from "@/app/App";

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/list" replace />} />
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route path={path} element={element} />
        ))}
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;
