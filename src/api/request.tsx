import axios from "axios";

const request = (url: string) => {
  return axios.get(url).then((response: any) => {
    return response.data;
  });
};

export const requestCors = (url: String) => {
  return axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response: any) => {
      return response.data;
    });
};

export default request;
