import axios from "axios";

export const uploadImg = async (file) => {
    const cloudName = import.meta.env.VITE_CLOUD_NAME;
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'softTech_preset');
    try{
        let api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

        const res = await axios.post(api, data);
        const { secure_url } = res.data;
        console.log(secure_url);
        return secure_url;

    } catch (err) {
        console.log(err);
        return '';
    }
}