import { describe, it, expect, vi, beforeEach } from "vitest";
import { StatsApiClient } from "./StatsApi";
import { mockJson, mockError, setupFetchMock } from "../TestConfig/mockUtils";

const BASE_URL = "http://localhost:3001/api/v1";
let clientStats: StatsApiClient;
let fetchMock: ReturnType<typeof vi.spyOn>;

beforeEach(() => {
  clientStats = new StatsApiClient(BASE_URL);
  fetchMock = setupFetchMock();
});

describe("StatsApiClient", () => {
  describe("handleResponse", () => {
    it("должен вернуть распарсенный JSON при успешном ответе", async () => {
      const mockData = { total: 100 };
      const res = await mockJson(mockData, 200);

      const result = await clientStats.handleResponse(res);
      expect(result).toEqual(mockData);
    });

    it("должен выбросить ошибку, если res.ok === false", async () => {
      const res = await mockError(500);

      await expect(clientStats.handleResponse(res)).rejects.toThrow(
        "handle response error blin! 500",
      );
    });
  });

  describe("getSummary", () => {
    it("должен выполнить GET-запрос к /stats/summary с правильным параметром period", async () => {
      const period = "weekly";
      const mockData = { approvedPercentage: 90 };
      fetchMock.mockResolvedValueOnce(mockJson(mockData));

      const result = await clientStats.getSummary(period);

      expect(fetchMock).toHaveBeenCalledWith(
        `${BASE_URL}/stats/summary?period=${period}`,
        { method: "GET" },
      );

      expect(result).toEqual(mockData);
    });

    it("должен обрабатывать ошибку от сервера", async () => {
      fetchMock.mockResolvedValueOnce(mockError(401));

      await expect(clientStats.getSummary("monthly")).rejects.toThrow(
        "handle response error blin! 401",
      );
    });
  });

  describe("getChartByPath", () => {
    it("должен выполнить GET-запрос к правильному пути и параметру", async () => {
      const path = "approved_vs_rejected";
      const period = "daily";
      const mockData = [{ date: "25", count: 15 }];
      fetchMock.mockResolvedValueOnce(mockJson(mockData));

      const result = await clientStats.getChartByPath(path, period);

      expect(fetchMock).toHaveBeenCalledWith(
        `${BASE_URL}/stats/chart/${path}?period=${period}`,
        { method: "GET" },
      );

      expect(result).toEqual(mockData);
    });

    it("должен корректно обрабатывать разные пути и параметры", async () => {
      const path = "priority_breakdown";
      const period = "yearly";
      fetchMock.mockResolvedValueOnce(mockJson([]));

      await clientStats.getChartByPath(path, period);

      expect(fetchMock).toHaveBeenCalledWith(
        `${BASE_URL}/stats/chart/${path}?period=${period}`,
        { method: "GET" },
      );
    });
  });
});
