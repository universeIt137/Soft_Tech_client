import { create } from "zustand";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";

const baseUrl = `http://localhost:3000/api/v1`;

const serviceStore = create((set) => ({
  serviceDataList: [],
  serviceApiRequest: async () => {
    let res = await axios.get(`${baseUrl}/getAllService`);
    if (res.data["status"] === "success") {
      set({ serviceDataList: res.data["data"] });
    }
  },
  serviceDeleteApi: async (id) => {
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

export default serviceStore;
