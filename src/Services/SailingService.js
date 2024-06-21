import axios from "axios";
import { environment } from "../Environment/Environment";
import { token } from "./Token";
import Cookies from "js-cookie";

const baseURL = environment.serverURL;
//const authToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkZSRVNDT05WMiIsIm5iZiI6MTcxNjI5MzA2OSwiZXhwIjoxNzI0MjQxODY5LCJpYXQiOjE3MTYyOTMwNjl9.D2SwJmLaAlWeayfopT3ae1X-JodJAH60gjhj-7Y6vPg"; 
 const authToken = Cookies.get("jwtToken")

export function SailingService(request) {
  console.log('request',request)
  return axios({
    method: "POST",
    url: baseURL+"landing_page_Sailings",
    params: request,
    headers: {
        auth_token:authToken 
      }
    
  });
}

