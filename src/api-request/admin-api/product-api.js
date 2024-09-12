import axios from 'axios';

const baseUrl = "https://soft-tech-server-eight.vercel.app/api/v1";

const ProductStore = create((set) => ({

    AddProductRequest:  async (postBody) => {
    try {
        const res = await axios.post(`${baseUrl}/CreateProduct`, postBody);
        if (res.data.status === 'success') {
        return res.data;
        } else {
        return false;
        }
    } catch (e) {
        console.log(e);
        return false;
    }
    },

    productList: null,
    getProductRequest:  async() => {
    try{
        const  res = await axios.get(`${baseUrl}/GetProducts`)
        console.log(res.data)
        if(res.data.status = 'success'){
            return res.data
        }else{
            return false
        }
    }catch(e){
        console.log(e)
    }
}
}))

export default ProductStore