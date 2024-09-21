import { create } from "zustand";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";
import { getToken } from "../../helper/sessionHelper";
const axiosPublic = useAxiosPublic();

// const baseUrl = `http://localhost:3000/api/v1`;

const config = {
  headers: {
    token: getToken(),
  },
};

const careerStore = create((set) => ({
  createCareerApi: async (postBody) => {
    try {
      // let url = `${baseUrl}/createCareer`;
      return axiosPublic
        .post(`/createCareer`, postBody, config)
        .then((res) => {
          console.log(res);
          if (res.data["status"] === "success") {
            return true;
          } else {
            return false;
          }
        })
        .catch((e) => {
          return false;
        });
    } catch (error) {
      return error;
    }
  },
  careerDataList: [],
  careerApiDataRequest: async () => {
    let res = await axiosPublic.get(`/getAllCareer`);
    if (res.data["status"] === "success") {
      set({ careerDataList: res.data["data"] });
    }
  },

  careerDeleteApi: (id) => {
    try {
      let deleteUrl = `${baseUrl}/deleteCareer/${id}`;
      return axiosPublic
        .delete(`/deleteCareer/${id}`, config)
        .then((res) => {
          if (res.data["status"] === "success") {
            return res.data["status"];
          }
        })
        .catch((e) => {
          return false
        });
    } catch (error) {
      return false;
    }
  },
}));

export default careerStore;
