import axios from "axios";
import { environment } from "../Environment/Environment";
import { token } from "./Token";

const baseURL = environment.serverURL;
const authToken = token()

export function UploadDocumentService({payload}) {
console.log("r",payload);
    return axios({
      method: "POST",
      url: baseURL + "upload_document",
      headers: { 
        auth_token: authToken,
        "Access-Control-Allow-Origin": "*"
      },
      data: payload,

    });
  }