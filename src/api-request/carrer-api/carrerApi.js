import { create } from "zustand";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";
import { getToken } from "../../helper/sessionHelper";

const baseUrl = `http://localhost:3000/api/v1`;

const config = {
  headers: {
    token: getToken(),
  },
};

console.log(`token is ${config}`)

const careerStore = create((set) => ({
  createCareerApi: async (postBody) => {
    try {
      let url = `${baseUrl}/createCareer`;
      return axios
        .post(url, postBody, config)
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
  careerStoreDataList: [],
  careerStoreApiRequest: async () => {
    let res = await axios.get(`${baseUrl}/getAllCareer`);
    if (res.data["status"] === "success") {
      set({ serviceDataList: res.data["data"] });
    }
  },
  careerStoreDeleteApi: async (id) => {
    try {
      let res = await axios.delete(`${baseUrl}/deleteService/${id}`);
      if (res) {
        return res.data.status;
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  },
}));

export default careerStore;
