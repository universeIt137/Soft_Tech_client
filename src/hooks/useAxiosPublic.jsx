import axios from 'axios';
const Url = "https://soft-tech-server-eight.vercel.app/api/v1";
const localUrl = "http://localhost:3000"

const axiosPublic = axios.create({
    baseURL: localUrl
})

const useAxiosPublic = () => {
    return axiosPublic;
}


export default useAxiosPublic;