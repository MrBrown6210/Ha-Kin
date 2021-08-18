import Axios, { AxiosRequestConfig } from "axios";
import Cookie from "js-cookie";

const API_URL = process.env.API_URL || "https://msw.io";

export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const token = Cookie.get("token");
if (token) axios.defaults.headers.Authorization = `Bearer ${token}`;

export const fetcher = async <T>(url: string, arg?: AxiosRequestConfig) => {
  const res = await axios.get(url, arg);
  return res.data;
};
