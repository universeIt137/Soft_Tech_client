import { create } from "zustand";
import axios from "axios";
import { getToken } from "../../helper/sessionHelper";

let baseUrl = `https://soft-tech-server-liart.vercel.app/api/v1`;

const config = {
  headers: {
    token: getToken(),
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
          return true;
        });
    } catch (error) {
      return false;
    }
  },
  getAllServiceData: [],
  getAllServiceApi: async () => {
    try {
      let res = await axios.get(`${baseUrl}/get-all-service`);
      if (res.data.status === "success") {
        set({ getAllServiceData: res.data["data"] });
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  },
  deleteServiceApi: (id) => {
    let url = `${baseUrl}/delete-service/${id}`;
    return axios
      .delete(url, config)
      .then((res) => {
        if (res.data.status === "success") {
          return true;
        } else {
          return false;
        }
      })
      .catch((e) => {
        return e;
      });
  },
  updateServiceApi: async (id,payload) => {
    const url = `${baseUrl}/update-service/${id}`;
    return await axios
      .put(url,payload, config)
      .then((res) => {
        if(res.data["status"]==="success"){
          return true;
        }else{
          return false;
        }
      })
      .catch((err) => {
        return false;
      });
  },
}));

export default serviceStore;
