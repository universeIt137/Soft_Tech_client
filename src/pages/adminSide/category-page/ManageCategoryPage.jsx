import React, { useEffect, useState } from 'react'
import categoryStore from '../../../api-request/category-api/categoryApi'
import { Link } from 'react-router-dom';

const ManageCategoryPage = () => {
  const {categoryDataList,categoryDataListApi} = categoryStore();
  const [loader,setLoader] = useState(false);
  useEffect(()=>{
    (async()=>{
      setLoader(true);
      await categoryDataListApi();
      setLoader(false);
    })()
  },[])
  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className='text-center py-5 font-bold text-2xl ' >Category Table</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-center text-gray-600 font-semibold">
            <th className="p-4">Category Name</th>
            <th className="p-4">Image</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            categoryDataList && categoryDataList.map((item,i)=>{
              return(
                <tr key={i} className="hover:bg-gray-100 text-center">
                  <td className="border border-gray-300 p-4">{item.name}</td>
                  <td className="border border-gray-300 p-4">
                    <img src={item.image||`https://via.placeholder.com/100`} alt={""} className="w-16 h-16 rounded-full" />
                  </td>
                  <td className="border border-gray-300 p-4">
                    <button className="py-2 px-4 bg-blue-500 text-white rounded-md">
                      <Link to={`/dashboard/category-update/${item._id}`}>Edit</Link>
                    </button>
                    <button className="py-2 px-4 bg-red-500 text-white rounded-md ml-2">Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default ManageCategoryPage
