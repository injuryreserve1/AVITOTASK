type Param = Record<string, string | string[]> | string;

export class AdApiClient {
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

  async actionAd(
    id: string,
    action: string,
    reason?: string,
    comment?: string,
  ) {
    if (action == "approve") {
      const res = await fetch(`${this._baseUrl}/ads/${id}/${action}`, {
        method: "POST",
      });
      console.log("approve", res);
      return this.handleResponse(res);
    }

    const res = await fetch(`${this._baseUrl}/ads/${id}/${action}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reason: reason,
        comment: comment,
      }),
    });
    return this.handleResponse(res);
  }

  async getAds(params: Param = "") {
    console.log(`${this._baseUrl}/{ads${params}`);

    const searchParams = Object.entries(params).reduce((sp, [key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => sp.append(key, v));
      } else sp.append(key, value);

      return sp;
    }, new URLSearchParams());

    const queryString = searchParams.toString();
    const url = `${this._baseUrl}/ads${queryString ? `?${queryString}` : ""}`;

    const res = await fetch(url, { method: "GET" });
    return this.handleResponse(res);
  }

  async getAd(id: number) {
    const res = await fetch(`${this._baseUrl}/ads/${id}`, {
      method: "GET",
    });
    return this.handleResponse(res);
  }
}

//import.meta.env.BACKEND_URL
export const adApiClient = new AdApiClient("http://localhost:3001/api/v1");
