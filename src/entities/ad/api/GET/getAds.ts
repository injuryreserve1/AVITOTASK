import { adApiClient } from "@shared/api/AdApi";

export const getAdsByPage = async (params: Record<string, string> | string) => {
  const res = await adApiClient.getAds(params);
  return res;
};

export const getAdById = async (id: number) => {
  const res = await adApiClient.getAd(id);
  return res;
};
