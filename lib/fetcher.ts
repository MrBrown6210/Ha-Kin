const API_URL = process.env.API_URL || "https://msw.io";

export const fetcher = async <T>(url: string, arg?: RequestInit) => {
  const api = url.startsWith("http") ? url : `${API_URL}/${url}`;
  const res = await fetch(api, arg);
  return await res.json();
};
