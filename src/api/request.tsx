import axios from "axios";

const request = (url: string) => {
  return axios.get(url).then((response: any) => {
    return response.data;
  });
};

export default request;
