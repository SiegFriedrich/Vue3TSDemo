import service from ".";
import { LoginData } from "../type/login";

export function login(data: LoginData) {
  return service({
    url: "/vue-login",
    method: "POST",
    data,
  });
}

export function getAllGoods() {
  return service({
    url: "/goods/all",
    method: "GET",
  });
}
