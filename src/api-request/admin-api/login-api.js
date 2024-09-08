import axios from "axios";
import { setToken } from "../../helper/sessionHelper"
import useAxiosPublic from "../../hooks/useAxiosPublic";
const baseUrl = "https://soft-tech-server-eight.vercel.app/api/v1";

export const loginApi = async (postBody) => {
    const axiosPublic = useAxiosPublic();
    try {
        let res = await axiosPublic.post(`/adminLogin`,postBody);
        if(res.data["status"]==="success"){
            setToken(res.data["token"]);
            return res.data["status"];
        }else {
            return false;
        }
    } catch (error) {
        return error;
    }
};