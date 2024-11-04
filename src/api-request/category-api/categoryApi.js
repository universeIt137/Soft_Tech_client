
import useAxiosPublic from './../../hooks/useAxiosPublic';
import { create } from 'zustand';

const axiosPublic = useAxiosPublic();


const categoryStore = create((set)=>({
    categoryCreateApi : async (payload)=>{
        const res = await axiosPublic.post(`/category/create`,payload);
        if(res.data["status"] ==='success'){
            return true ;
        } else{
            return false;
        }
    },
    categoryDataList : [],
    categoryDataListApi : async ()=>{
        let res = await axiosPublic.get(`/category/list`);
        if(res.data["status"] ==='success'){
            set({categoryDataList: res.data.data});
        }
    },
}));

export default categoryStore;