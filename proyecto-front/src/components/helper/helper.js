import { isUndefined } from "util";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export function calculaExtraccionSesion() {
  const now = new Date().getTime();
  const newDate = now + 60 * 30 * 1001;
  return new Date(newDate);
}

export function getSession() {
  return isUndefined(cookies.get("_s")) ? false : cookies.get("_s");
}

function renovarSesion() {
  const sesion = getSession();
  if (!sesion) window.location.href = "/login";
  cookies.set("_s", sesion, {
    path: "/",
    expires: calculaExtraccionSesion(),
  });
}

export const request = {
  get: function (url) {
    renovarSesion();
    return axios.get(url);
  },
};
