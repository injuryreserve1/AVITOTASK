import { statsApiClient } from "@shared/api/StatsApi";

export const getSummary = async (params: string) => {
  const res = await statsApiClient.getSummary(params);
  return res;
};

export const getChartByPath = async (path: string, params: string) => {
  const res = await statsApiClient.getChartByPath(path, params);
  return res;
};
