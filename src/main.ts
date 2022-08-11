import axios, { AxiosInstance } from "axios";
import urls from "./endpoint";

export class RcloneRC {
  private axios: AxiosInstance;

  constructor(host: string, auth: string) {
    this.axios = axios.create({
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
      responseType: "json",
      baseURL: host,
    });
  }

  getStats = (group = {}) => {
    return new Promise((resolve, reject) => {
      this.axios.post(urls.stats, { group }).then(
        (res) => {
          resolve(res.data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  };
}
