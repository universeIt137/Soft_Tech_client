import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import productStore from "./../../../api-request/product-api/productApi";
import { useNavigate, useParams } from "react-router-dom";

const ProductUpdatePage = () => {
  const { id } = useParams();
  const { singleProductDataApi, productUpdateApi, singleProductData } =
    productStore();
    useEffect(()=>{
      (async()=>{
        await singleProductDataApi(id);
      })()
    },[id]);
    console.log(`data is ${singleProductData}`)
  let productNameRef = useRef();
  let productImgRef = useRef();
  let productDesRef = useRef();

  const submitValue = async (e) => {
    e.preventDefault();

    let productName = productNameRef.current.value;
    let productImg = productImgRef.current.value;
    let productDes = productDesRef.current.value;

    let data = { productName, productImg, productDes };
    let res = await productUpdateApi(id,data);
    if(res[0]){
        toast.success(`${res}`)
    }else{
        toast.error(`${res[1]}`)
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Update Product
          </h2>

          <form onSubmit={submitValue} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Product Name
              </label>
              <input
                ref={productNameRef}
                key={Date.now()}
                defaultValue={singleProductData.productName}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product name"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Product Image URL
              </label>
              <input
                ref={productImgRef}
                key={Date.now}
                defaultValue={singleProductData.productImage}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Product Description
              </label>
              <textarea
                ref={productDesRef}
                key={Date.now()}
                defaultValue={singleProductData.productDesc}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                placeholder="Enter product description"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-text_blue hover:bg-text_hover text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Update Product
            </button>
          </form>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
};

export default ProductUpdatePage;
