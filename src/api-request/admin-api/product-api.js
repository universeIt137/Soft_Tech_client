import useAxiosPublic from "../../hooks/useAxiosPublic";

const baseUrl = "https://soft-tech-server-eight.vercel.app/api/v1";


export const AddProductRequest = async(postbody) => {
   try{
    const axiosPublic = useAxiosPublic()
    let res = await axiosPublic.post(`/CreateProduct`, postbody);
    if(res.data.status === 'success') {
        return res.data
    }else{
        return false
    }
   }catch(e){
    return console.log(e)
   }

}