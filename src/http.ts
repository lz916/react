import { useAuth } from "./context/auth-context";
import { logout } from "./auth-provider";
import { response } from "msw";
import qs from "qs";
import * as auth from "./auth-provider";
const apiUrl = process.env.REACT_APP_API_URL;
// export const fetch = (url: string, {data, token, ...customeConfig}) => {

// }
interface Config extends RequestInit {
  token?: string;
  data?: object;
}

export const http = async (
  url: string,
  { data, token, headers, ...customeConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "applition/json" : "",
    },
    ...customeConfig,
  };
  if (config.method.toUpperCase() === "GET") {
    url += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  console.log(`url:${url}`);
  return window.fetch(apiUrl + url, config).then(async (response) => {
    const data = await response.json();
    if (response.status === 401) {
      await auth.logout();
      return Promise.reject({ message: "未登录" });
    }
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};

export const useHttp = () => {
  const { user } = useAuth();
  return (...[url, config]: Parameters<typeof http>) =>
    http(url, { ...config, token: user?.token });
};
