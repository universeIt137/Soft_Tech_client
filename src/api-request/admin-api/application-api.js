import axios from 'axios';


import { create } from "zustand";
import useAxiosPublic from '../../hooks/useAxiosPublic';
const axiosPublic = useAxiosPublic();

const ApplicationStore = create((set) => ({

    

    applicationList: null,
    getApplicationRequest:  async() => {
    try{
        const  res = await axiosPublic.get(`/getApplication`)
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