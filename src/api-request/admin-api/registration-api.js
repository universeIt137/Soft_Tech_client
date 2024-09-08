import axios from 'axios';
const baseUrl = "https://soft-tech-server-eight.vercel.app/api/v1";

export const registrationApi = async (postBody) =>{
    try {
        let res = await axios.post(`${baseUrl}/CreateAdmin`,postBody);
        console.log(`res is ${res}`);
        if(res.data.status==="Success"){
            return res.data["status"]
        }else {
            return false;
        }
    } catch (error) {
        return console.log(error)
    }
}