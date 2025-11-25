import { adApi } from "@entities/ad";
import { useMutation } from "@tanstack/react-query";

export const usePostQuery = () => {
  return useMutation({
    mutationFn: (params: {
      id: string;
      action: string;
      reason?: string;
      comment?: string;
    }) =>
      adApi.postAction(params.id, params.action, params.reason, params.comment),
  });
};
