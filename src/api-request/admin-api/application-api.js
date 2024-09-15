import axios from 'axios';

const baseUrl = "https://soft-tech-server-eight.vercel.app/api/v1";
import { create } from "zustand";


const ApplicationStore = create((set) => ({

    

    applicationList: null,
    getApplicationRequest:  async() => {
    try{
        const  res = await axios.get(`${baseUrl}/getApplication`)
        console.log(res.data)
        if(res.data.status = 'success'){
            set({applicationList: res.data['data']})
            return res.data
        }else{
            return false
        }
    }catch(e){
        console.log(e)
    }
}
}))

export default ApplicationStore