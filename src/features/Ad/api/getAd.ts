import { adApi } from "@/entities/ad";
import { useQuery } from "@tanstack/react-query";

export const useAdQuery = (id: number) => {
  return useQuery({
    queryKey: ["ad", id],
    queryFn: () => adApi.getAdById(id),
  });
};
