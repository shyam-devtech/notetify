import axios from "axios";

// const BASE_URL="https://backend.notetifyapp.com"
const BASE_URL = "http://192.168.1.187:17365/api/v1";
// const BASE_URL = "http://18.215.110.87:8000/api/v1"

export async function makePostRequest(endpoint, body) {
   
    return axios({
      method: "post",
      url: BASE_URL+endpoint,
      data: body,
      headers: {
        "Content-Type": "application/json",
        'typelogin':localStorage.getItem('logintypefornotitefy'),
        'Authorization': `Bearer ${localStorage.getItem('token_id')}`
        // "Access-Control-Allow-Origin": "*",
      },
    });
}