import axios from "axios";
import { environment } from "../Environment/Environment";
import { token } from "./Token";

const baseURL = environment.serverURL;
const authToken = token()

export function UploadDocumentService(request) {
    return axios({
      method: "GET",
      url: baseURL + "upload_document",
      params:request,
      headers: {
        auth_token: authToken 
      }
    });
  }