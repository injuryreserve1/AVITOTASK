import type { RouteProps } from "react-router";
import { ListPageAsync } from "@pages/ListPage/";
import { StatsPageAsync } from "@pages/StatsPage/StatsPage.async";
import { DetailedAdPageAsync } from "@pages/DetailedAdPage/DetailedAdPage.async";
import NotFoundPage from "@pages/NotFoundPage/NotFoundPage";

export type AppRoutes = "list" | "stats" | "item" | "notFound";

export const Routepath: Record<AppRoutes, string> = {
  list: "/list",
  stats: "/stats",
  item: "/item/:id",
  notFound: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  list: {
    path: Routepath.list,
    element: <ListPageAsync />,
  },
  stats: {
    path: Routepath.stats,
    element: <StatsPageAsync />,
  },
  item: {
    path: Routepath.item,
    element: <DetailedAdPageAsync />,
  },
  notFound: {
    path: Routepath.notFound,
    element: <NotFoundPage />,
  },
};
