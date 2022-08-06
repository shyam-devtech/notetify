import axios from "axios";

// const BASE_URL="https://backend.notetifyapp.com"
const BASE_URL = "http://192.168.1.187:17365/api/v1";
// const BASE_URL = "http://18.215.110.87:8000/api/v1"

//post method
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

// //put method
// export async function makePutRequest(endpoint, bodyFormData) {
   
//   return axios({
//     method: "put",
//     url: BASE_URL+endpoint,

//     data: bodyFormData,
//     headers: {
//       "Content-Type": "application/json",
//       'typelogin':localStorage.getItem('logintypefornotitefy'),
//       'Authorization': `Bearer ${localStorage.getItem('token_id')}`
//       //"Access-Control-Allow-Origin": "*",
//     },
//   }).catch(function (error) {
//       //handle error
//       console.error("API ERROR: ");
//       console.error(error)
//       console.error("END API ERROR");
//     });
// }

// // get method
//   export async function makeGetRequest(endpoint, bodyFormData) {
//     // console.log(BASE_URL + endpoint);
//     return axios({
//       method: "get",
//       url: BASE_URL+endpoint,
//       data: bodyFormData,
//       headers: {
//         "Content-Type": "application/json",
//         'typelogin':localStorage.getItem('logintypefornotitefy'),
//         'Authorization': `Bearer ${localStorage.getItem('token_id')}`
//         //"Access-Control-Allow-Origin": "*",
//       },
//     }).catch(function (error) {
//         //handle error
//         console.error("API ERROR: ");
//         console.error(error)
//         console.error("END API ERROR");
//       });
//   }
//   export function makeFormData(fields, data){
//     console.assert(fields.length===data.length,"Length of Fields and Data must be equal");
//     let bodyFormData = new FormData();
//     fields.forEach((_, index) => {
//       bodyFormData.append(fields[index], data[index]);
//     });
//     return bodyFormData;

//   }