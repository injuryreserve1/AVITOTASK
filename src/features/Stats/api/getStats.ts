import { getSummary, getChartByPath } from "@/entities/stat";
import { useQuery } from "@tanstack/react-query";

export const useSummaryQuery = (params: string) => {
  return useQuery({
    queryKey: ["stats", params],
    queryFn: () => getSummary(params),
  });
};

export const useChartByNameQuery = (path: string, params: string) => {
  return useQuery({
    queryKey: ["stats", path, params],
    queryFn: () => getChartByPath(path, params),
  });
};
