import { describe, it, expect, vi, beforeEach } from "vitest";
import { AdApiClient } from "./AdApi.ts";
import { mockJson, mockError } from "../TestConfig/mockUtils";

const BASE_URL = "http://localhost:3001/api/v1";

let clientAd: AdApiClient;
let fetchMock: ReturnType<typeof vi.spyOn>;

beforeEach(() => {
  clientAd = new AdApiClient(BASE_URL);
  fetchMock = vi.spyOn(global, "fetch");
});

describe("AdApiClient", () => {
  describe("handleResponse", () => {
    it("должен вернуть распарсенный JSON при успешном ответе", async () => {
      const mockData = { id: 1, title: "Test Ad" };
      const res = await mockJson(mockData, 200);

      const result = await clientAd.handleResponse(res);
      expect(result).toEqual(mockData);
    });

    it("должен выбросить ошибку, если res.ok === false", async () => {
      const res = await mockError(404);

      await expect(clientAd.handleResponse(res)).rejects.toThrow(
        "handle response error blin! 404",
      );
    });
  });

  describe("actionAd", () => {
    it('должен выполнить POST-запрос с пустым телом для "approve"', async () => {
      fetchMock.mockResolvedValueOnce(mockJson({ success: true }));

      await clientAd.actionAd("123", "approve");

      expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/ads/123/approve`, {
        method: "POST",
      });
    });

    it('должен выполнить POST-запрос с reason и comment для "reject"', async () => {
      fetchMock.mockResolvedValueOnce(mockJson({ success: true }));
      const reason = "Incorrect Photo";
      const comment = "Needs better focus";

      await clientAd.actionAd("456", "reject", reason, comment);

      expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/ads/456/reject`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason, comment }),
      });
    });
  });

  describe("getAd", () => {
    it("должен выполнить GET-запрос к правильному ID", async () => {
      const mockData = { id: 789, title: "Single Ad" };
      fetchMock.mockResolvedValueOnce(mockJson(mockData));

      const result = await clientAd.getAd(789);

      expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/ads/789`, {
        method: "GET",
      });
      expect(result).toEqual(mockData);
    });
  });

  describe("getAds", () => {
    it("должен выполнить GET-запрос без параметров, если params пустой", async () => {
      fetchMock.mockResolvedValueOnce(mockJson([]));
      await clientAd.getAds("");

      expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/ads`, {
        method: "GET",
      });
    });

    it("должен корректно формировать URL для плоских параметров", async () => {
      fetchMock.mockResolvedValueOnce(mockJson([]));
      const params = { page: "2", sortBy: "price" };

      await clientAd.getAds(params);

      expect(fetchMock).toHaveBeenCalledWith(
        `${BASE_URL}/ads?page=2&sortBy=price`,
        { method: "GET" },
      );
    });

    it("должен корректно формировать URL для параметров-массивов", async () => {
      fetchMock.mockResolvedValueOnce(mockJson([]));
      const params = {
        page: "1",
        "status[]": ["approved", "pending"],
      };

      await clientAd.getAds(params);

      expect(fetchMock).toHaveBeenCalledWith(
        `${BASE_URL}/ads?page=1&status%5B%5D=approved&status%5B%5D=pending`,
        { method: "GET" },
      );
    });
  });
});
