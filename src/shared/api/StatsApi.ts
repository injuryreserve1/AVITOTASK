type Param = Record<string, string | string[]> | string;

export class StatsApiClient {
  private _baseUrl: string;

  constructor(url: string) {
    this._baseUrl = url;
  }

  async handleResponse(res: Response) {
    if (!res.ok) throw new Error(`handle response error blin! ${res.status}`);
    try {
      const finalRes = await res.json();
      return finalRes;
    } catch (err) {
      console.error("error while handle response!", err);
    }
  }

  async getSummary(params: Param) {
    const res = await fetch(`${this._baseUrl}/stats/summary?period=${params}`, {
      method: "GET",
    });

    return this.handleResponse(res);
  }

  async getChartByPath(path: string, params: Param) {
    const res = await fetch(
      `${this._baseUrl}/stats/chart/${path}?period=${params}`,
      {
        method: "GET",
      },
    );

    return this.handleResponse(res);
  }
}

export const statsApiClient = new StatsApiClient(
  "http://localhost:3001/api/v1",
);
