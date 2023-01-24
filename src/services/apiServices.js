import {Coingecko, Smartpay} from "../globals";
import Storage from "./storage";

function getToken() {
  let userCredencial = Storage.get("TOKEN");
  return userCredencial;
}

const ApiServices = {
  apiGetCoingecko: fetch(Coingecko, {method: "GET"}).then((res) => res.json()),

  apiGetSmartpay: fetch(Smartpay, {method: "GET"}).then((res) => res.json()),

  // apiLoginBase: (parameter = undefined, obj = undefined) => {
  //   if (parameter) {
  //     return fetch(`${APIBASE}${parameter}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "text/plain",
  //         Accept: "*/*",
  //       },
  //       body: obj,
  //     }).then((res) => res.json());
  //   } else {
  //   }
  // },
  // apiPostTokenBearer: (parameter = undefined, obj = undefined) => {
  //   if (parameter) {
  //     return fetch(`${APIBASE}${parameter}`, {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //         Authorization: `Bearer ${getToken()}`,
  //       },
  //       body: JSON.stringify(obj),
  //     }).then((res) => res.json());
  //   }
  // },

  // apiGetTokenBearer: (parameter = undefined, obj = undefined) => {
  //   if (parameter) {
  //     return fetch(`${APIBASE}${parameter}`, {
  //       method: "GET",
  //       headers: {
  //         "content-type": "application/json",
  //         Authorization: `Bearer ${getToken()}`,
  //       },
  //       body: JSON.stringify(obj),
  //     }).then((res) => res.json());
  //   }
  // },

  // apiLogin: (parameter = undefined, obj = undefined) => {
  //   if (parameter) {
  //     return fetch(`${APIBASE}${parameter}`, {
  //       method: "POST",
  //       headers: {"content-type": "application/json"},
  //       body: JSON.stringify(obj),
  //     }).then((res) => res.json());
  //   } else {
  //   }
  // },

  // apiGetWithToken: (parameter = undefined, token = undefined) => {
  //   if (parameter && token) {
  //     return fetch(`${APIBASE}${parameter}`, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }).then((res) => res.json());
  //   } else {
  //   }
  // },

  // apiPost: (parameter = undefined, obj = undefined) => {
  //   if (parameter) {
  //     return fetch(`${APIBASE}${parameter}`, {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //         Authorization: `Bearer ${getToken()}`,
  //       },
  //       body: JSON.stringify(obj),
  //     }).then((res) => res.json());
  //   } else {
  //   }
  // },
  // apiGetEndereco: (parameter = undefined) => {
  //   if (parameter) {
  //     //alert('sem captcha');
  //     return fetch(`${ENDERECO}${parameter}`, {
  //       method: "GET",
  //     }).then((res) => res.json());
  //   } else {
  //   }
  // },
  // apiPut: (parameter = undefined, obj = undefined) => {
  //   if (parameter) {
  //     return fetch(`${APIBASE}${parameter}`, {
  //       method: "PUT",
  //       headers: {
  //         "content-type": "application/json",
  //         Authorization: `Bearer ${getToken()}`,
  //       },
  //       body: JSON.stringify(obj),
  //     }).then((res) => res);
  //     //.then(res => res.json());
  //   } else {
  //   }
  // },
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //   apiPostWithToken: (parameter = undefined, obj = undefined) => {
  //     if (parameter) {
  //       var captcha = Storage.get("captcha");
  //       if (captcha == undefined || captcha == "") {
  //         return fetch(`${APIBASE}${parameter}`, {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //             Authorization: `Bearer ${getToken()}`,
  //           },
  //           body: JSON.stringify(obj),
  //         }).then((res) => res.json());
  //       } else {
  //         return fetch(`${APIBASE}${parameter}`, {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //             captcha: captcha,
  //             Authorization: `Bearer ${getToken()}`,
  //             //'key':RECAPTCHAKEY
  //           },
  //           body: JSON.stringify(obj),
  //         }).then((res) => res.json());
  //       }
  //     } else {
  //     }
  //   },

  //   apiPostWithTokenNotaFiscal: (parameter = undefined, page = 1, per_page = 5, pesquisa = "") => {
  //     if (parameter) {
  //       var captcha = Storage.get("captcha");
  //       return fetch(`${APIBASE}${parameter}`, {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //           captcha: captcha,
  //           Authorization: `Bearer ${getToken()}`,
  //           //'key':RECAPTCHAKEY
  //         },
  //         body: JSON.stringify({
  //           page: page,
  //           per_page: per_page,
  //           pesquisa: pesquisa,
  //         }),
  //       }).then((res) => res.json());
  //     }
  //   },

  //   apiUpload: (parameter = undefined, obj = undefined) => {
  //     if (parameter) {
  //       return fetch(`${APIBASE}${parameter}`, {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${getToken()}`,
  //           Accept: "multipart/form-data",
  //         },
  //         body: obj,
  //       }).then((res) => res.json());
  //     } else {
  //     }
  //   },

  //   apiPatch: (parameter = undefined, obj = undefined) => {
  //     if (parameter) {
  //       return fetch(`${APIBASE}${parameter}`, {
  //         method: "PATCH",
  //         headers: {
  //           "content-type": "application/json",
  //           Authorization: `Bearer ${getToken()}`,
  //         },
  //         body: JSON.stringify(obj),
  //       }).then((res) => res.json());
  //     } else {
  //     }
  //   },

  //   apiPutReturnJson: (parameter = undefined, obj = undefined) => {
  //     if (parameter) {
  //       return fetch(`${APIBASE}${parameter}`, {
  //         method: "PUT",
  //         headers: {
  //           "content-type": "application/json",
  //           Authorization: `Bearer ${getToken()}`,
  //         },
  //         body: JSON.stringify(obj),
  //       }).then((res) => res.json());
  //     } else {
  //     }
  //   },

  //   apiDel: (parameter = undefined) => {
  //     if (parameter) {
  //       return fetch(`${APIBASE}${parameter}`, {
  //         method: "DELETE",
  //         headers: {
  //           "content-type": "application/json",
  //           Authorization: `Bearer ${getToken()}`,
  //         },
  //       }).then((res) => res);
  //     } else {
  //     }
  //   },

  //   apiPostWithTokenPremiacao: (parameter = undefined, page = 1, per_page = 5, pesquisa = "") => {
  //     if (parameter) {
  //       var captcha = Storage.get("captcha");
  //       return fetch(`${APIBASE}${parameter}`, {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //           captcha: captcha,
  //           Authorization: `Bearer ${getToken()}`,
  //           //'key':RECAPTCHAKEY
  //         },
  //         body: JSON.stringify({
  //           page: page,
  //           per_page: per_page,
  //           pesquisa: pesquisa,
  //         }),
  //       }).then((res) => res.json());
  //     }
  //   },

  //   apiGetWithIdAndToken: (parameter = undefined, id = undefined) => {
  //     if (parameter) {
  //       return fetch(`${APIBASE}${parameter}/${id}`, {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${getToken()}`,
  //         },
  //       }).then((res) => res.json());
  //     } else {
  //     }
  //   },
};

export default ApiServices;
