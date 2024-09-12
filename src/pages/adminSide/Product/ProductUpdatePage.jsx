import React, { useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";
import productStore from './../../../api-request/product-api/productApi';

const ProductUpdatePage = () => {
    const {productDataList,productDataListApi} = productStore();
    useEffect(()=>{
        (async()=>{
            await productDataListApi();
        })()
    },[])


    const productUpdate = async () => {
        const productName = productNameRef.current.value;
        const productImg = productImageRef.current.value;
        const productDes = productDescRef.current.value;
        const data = {productName,productImg,productDes};
        
    };

    let productNameRef = useRef();
    let productImageRef = useRef();
    let productDescRef = useRef();

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Update Product
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Product Name
              </label>
              <input
                ref={productName}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Product Image URL
              </label>
              <input
                
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Product Description
              </label>
              <textarea
                ref={(input)=>{productDesc=input}}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                placeholder="Enter product description"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className=" bg-text_blue hover:bg-text_hover text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Add Product
            </button>
          </form>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
};

export default ProductUpdatePage;
