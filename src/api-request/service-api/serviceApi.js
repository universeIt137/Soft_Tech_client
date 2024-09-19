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
  getAllServiceData : [],
  getAllServiceApi : async () =>{
    try {
      let res = await axios.get(`${baseUrl}/get-all-service`);
      if(res.data.status==="success"){
        set({getAllServiceData:res.data["data"]});
      }else{
        return false;
      }
    } catch (error) {
      return error
    }
  }
}));

export default serviceStore;
