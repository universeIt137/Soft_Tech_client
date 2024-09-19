import { create } from "zustand";
import axios from "axios";
import { getToken } from "../../helper/sessionHelper";


let baseUrl = `https://soft-tech-server-liart.vercel.app/api/v1`

const config = {
  headers: {
    token: (getToken()),
  },
};

const serviceStore = create((set) => ({
  createServiceApi: (postBody) => {
    let createUrl = `${baseUrl}/create-service`;
    try {
      return axios
        .post(createUrl, postBody, config)
        .then((res) => {
          if (res.data["status"] === "success") {
            return res.data["status"];
          }
        })
        .catch((err) => {
          return true
        });
    } catch (error) {
      return false;
    }
  },
}));

export default serviceStore;
