import { create } from "zustand";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";

const baseUrl = `http://localhost:3000/api/v1`;

const careerStore = create((set) => ({

    createCareerApi : async ()=>{
        try {
            let res = await axios.post(`${baseUrl}/createCareer`);
        } catch (error) {
            
        }
    },

  careerStoreDataList: [],
  careerStoreApiRequest: async () => {
    let res = await axios.get(`${baseUrl}/getAllService`);
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
