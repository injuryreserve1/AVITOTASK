import { adApiClient } from "@shared/api/AdApi";

export const postAction = async (
  id: string,
  action: string,
  reason?: string,
  comment?: string,
) => {
  const res = await adApiClient.actionAd(id, action, reason, comment);
  return res;
};
