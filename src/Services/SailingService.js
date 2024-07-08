import axios from "axios";
import { environment } from "../Environment/Environment";
import Cookies from "js-cookie";

const baseURL = environment.serverURL;

export function SailingService(request) {
  const authToken = Cookies.get("jwtToken")

  return axios({
    method: "POST",
    url: baseURL+"landing_page_Sailings",
    params: request,
    headers: {
        auth_token:authToken 
      }
    
  });
}

