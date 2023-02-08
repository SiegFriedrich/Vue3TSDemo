import service from ".";
import { LoginData } from "../type/login";

export default function login(data: LoginData) {
  return service({
    url: "/vue-login",
    method: "POST",
    data,
  });
}
