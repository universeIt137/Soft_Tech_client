import { create } from "zustand";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const axiosPublic = useAxiosPublic();


const portfolioStore = create((set)=>({
    portfolioCreateApi : async (payload)=>{
        const res = await axiosPublic.post(`/portfolio/create`,payload);
        if(res.data.status ==='success'){
            console.log(res.data.data);
            return res.data.data;
        }else{
            return false;
        }
    }
}));

export default portfolioStore;