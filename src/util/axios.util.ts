import { AxiosResponse, Method } from "axios";
class AxiosUtil {
  //....
  private baseUrl = `http://${process.env.VUE_APP_SERVER_DOMAIN}`;

  public async get<T>(
    url: string,
    queryParams?: any
  ): Promise<AxiosResponse<T>> {
    return this.request<T>(url, "GET", null, queryParams);
  }

  //TODO
  private async request<T>(
    url: string,
    method: Method,
    data?: any,
    params?: any
  ) {
    return { url, method, data, params };
  }
}

export const axiosUtil = new AxiosUtil();
