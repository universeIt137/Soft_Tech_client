import { create } from "zustand";
import axios from "axios";
import { getToken } from "../../helper/sessionHelper";
import useAxiosPublic from "../../hooks/useAxiosPublic";

// let baseUrl = `https://soft-tech-server-liart.vercel.app/api/v1`;
const axiosPublic = useAxiosPublic();

const config = {
  headers: {
    token: getToken(),
  },
};

const serviceStore = create((set) => ({
  createServiceApi: (postBody) => {
    let createUrl = `${baseUrl}/create-service`;
    try {
      return axiosPublic
        .post('/create-service', postBody, config)
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
      let res = await axiosPublic.get(`/get-all-service`);
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
    // let url = `${baseUrl}/delete-service/${id}`;
    return axiosPublic
      .delete(`/delete-service/${id}`, config)
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
    // const url = `${baseUrl}/update-service/${id}`;
    return await axiosPublic
      .put(`/update-service/${id}`,payload, config)
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
