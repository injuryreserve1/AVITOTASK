import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { adApi } from "@/entities/ad";

export const useAdsQuery = (params: Record<string, string> | string) => {
  return useQuery({
    queryKey: ["ads", params],
    queryFn: () => adApi.getAdsByPage(params),
    placeholderData: keepPreviousData,
  });
};
