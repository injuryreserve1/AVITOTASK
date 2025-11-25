import { vi } from "vitest";

export const mockJson = (data: any, status = 200) =>
  Promise.resolve({
    ok: status >= 200 && status < 300,
    status: status,
    json: () => Promise.resolve(data),
    text: () => Promise.resolve(JSON.stringify(data)),
  } as Response);

export const mockError = (status: number) =>
  Promise.resolve({
    ok: false,
    status: status,
    json: () => Promise.reject(new Error("Failed to parse JSON")),
  } as Response);

export const setupFetchMock = () => vi.spyOn(global, "fetch");
