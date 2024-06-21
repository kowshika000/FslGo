import axios from "axios";
import { environment } from "../Environment/Environment";
import { token } from "./Token";
import Cookies from "js-cookie";

const baseURL = environment.serverURL;
 const authToken = Cookies.get("jwtToken")
//const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkZSRVNDT05WMiIsIm5iZiI6MTcxNjI5MzA2OSwiZXhwIjoxNzI0MjQxODY5LCJpYXQiOjE3MTYyOTMwNjl9.D2SwJmLaAlWeayfopT3ae1X-JodJAH60gjhj-7Y6vPg"; 
// console.log('authToken',authToken)

export function BookingService({ payload }) {
  console.log(payload);
  
  return axios({
    method: "POST",
    url: baseURL + "booking_list",
    headers: {
      auth_token: authToken, 
    },
    data: payload,
  });
}
