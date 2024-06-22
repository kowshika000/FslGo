import axios from "axios";
import { environment } from "../Environment/Environment";
import { token } from "./Token";
import Cookies from "js-cookie";

const baseURL = environment.serverURL;

export function BookingService({ payload }) {
  
  const authToken = Cookies.get("jwtToken")
  console.log('authToken',authToken)
  
  return axios({
    method: "POST",
    url: baseURL + "booking_list",
    headers: {
      auth_token: authToken, 
    },
    data: payload,
  });
}
