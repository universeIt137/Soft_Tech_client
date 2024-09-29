import { create } from "zustand";
import useAxiosPublic from '../../hooks/useAxiosPublic';
const axiosPublic = useAxiosPublic();

const ApplicationStore = create((set) => ({
    applicationList: [],
    getApplicationRequest:  async() => {
    try{
        const res = await axiosPublic.get(`/all-applications`)   
        console.log(`res is ${res} `)     
        if(res.data.status = 'success'){
            
            set({applicationList: res.data['data']})
        }else{
            return false
        }
    }catch(e){
        return false;
    }
}
}))

export default ApplicationStore