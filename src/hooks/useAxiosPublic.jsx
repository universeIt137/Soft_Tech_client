import axios from 'axios';
import React from 'react';
const Url = "https://soft-tech-server-eight.vercel.app/api/v1";

const axiosPublic = axios.create({
    baseURL: Url
})

const useAxiosPublic = () => {
    return axiosPublic;
}


export default useAxiosPublic;