import axios from "axios";
import { setToken } from "../../helper/sessionHelper"
const baseUrl = "https://soft-tech-server-eight.vercel.app/api/v1";

export const loginApi = async (postBody)=>{
    try {
        let res = await axios.post(`${baseUrl}/adminLogin`,postBody);
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