import axios from "axios";
import { environment } from "../Environment/Environment";
import { token } from "./Token";

const baseURL = environment.serverURL;
const authToken = token()

export function ViewBookingService(request) {
    return axios({
      method: "GET",
      url: baseURL + "View_booking?booking_id=190124100291",
      params:request,
      headers: {
        auth_token: authToken 
      }
    });
  }