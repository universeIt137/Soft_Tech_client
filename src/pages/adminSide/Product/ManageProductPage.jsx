import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { toast, Toaster } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import productStore from "./../../../api-request/product-api/productApi";
import { deleteAlert } from "../../../helper/deleteHelperAlert";

const ManageProductPage = () => {
  const { productDataList, productDataListApi, deleteProductApi } =
    productStore();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await productDataListApi();
    })();
  }, []);

  const deleteService = async (id) => {
    let deleteRes = await deleteAlert(id);
    if (deleteRes.isConfirmed) {
      let res = await deleteProductApi(id);
      if (res) {
        await productDataListApi()
        toast.success("Product delete successfully");
      } else {
        toast.error("Product delete fail");
      }
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Manage Products
      </h2>

      {/* Success/Error Message */}
      {message && (
        <div
          className={`text-center text-lg mb-4 ${
            message.includes("successfully") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="w-full bg-gray-800 text-white">
              <th className="text-left py-3 px-4">SL No</th>
              <th className="text-left py-3 px-4">Product Name</th>
              <th className="text-left py-3 px-4">feature</th>
              <th className="text-left py-3 px-4">Product Image</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productDataList.map((item, i) => (
              <tr key={i} className="border-t border-gray-300">
                <td className="py-3 px-4">{i + 1}</td>
                <td className="py-3 px-4">{item.main_title}</td>
                <td className="py-3 px-4">
                  <img
                    src={item.nav_logo}
                    alt={item.nav_title}
                    className="w-16 h-16 py-[16px] object-cover"
                  />
                </td>
                <td className="py-3 px-4">
                  <p> { item.feature } </p>
                  <td/>
                </td>
                <td className="py-3 px-4 gap-2">
                  <NavLink title="update" to={`/dashboard/product/update/${item._id}`}>
                    <button className="w-4 bg-text_blue outline-none border-0 hover:bg-text_hover text-white px-4 py-2 rounded-md mr-2">
                      <i className="-ml-[6px] block ">
                        <FaEdit />
                      </i>
                    </button>
                  </NavLink>

                  <button
                    onClick={deleteService.bind(this, item["_id"])}
                    className="w-4 bg-red-500 outline-none border-0 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    <i title="delete" className="-ml-[8px] block ">
                      <MdDelete />
                    </i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ManageProductPage;
