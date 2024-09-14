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
const productStore = create((set) => ({
  createProductApi: (postBody) => {
    let createUrl = `${baseUrl}/CreateProduct`;
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
  productDataList: [],
  productDataListApi: async () => {
    try {
      let res = await axios.get(`${baseUrl}/GetProducts`);
      if (res.data["status"] === "success") {
        set({ productDataList: res.data.data });
      }else{
        return false;
      }
    } catch (error) {
        console.log(error);
    }
  },
  deleteProductApi : (id)=>{
    try {
        let url = `${baseUrl}/DeleteProduct/${id}`;
        return axios.delete(url,config).then((res)=>{
            return res.data["status"];
        }).catch((err)=>{
            return false
        })
    } catch (error) {
        return error
    };
  },
  productUpdateApi : (id,postBody) =>{
    try {
      let url = `${baseUrl}/UpdateProduct/${id}`;
      return   axios.put(url,postBody,config).then((res)=>{
        if(res.data["status"]==="success"){
          console.log(res.data["status"]);
          return res.data.status;
        }
      }).catch((err)=>{
        return err;
      })
    } catch (error) {
      return [false, error.response.msg] ;
    }
  },
  singleProductData : [],
  singleProductDataApi : (id) =>{
    try {
      let url = `${baseUrl}/single-product/${id}`;
      return axios.get(url).then((res)=>{
        if(res.data["status"]==="success"){
          set({singleProductData:res.data["data"]});
        }else{
          return false;
        }
      }).catch((err)=>{
        return err
      })
    } catch (error) {
      return error
    }
  }
}));

export default productStore;
