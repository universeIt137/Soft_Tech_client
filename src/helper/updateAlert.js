import Swal from "sweetalert2";
import {productUpdateApi} from "../api-request/product-api/productApi"

export async function  productUpdateAlert (id,data) {
    return Swal.fire({
        title: "Are you sure?",
        text: "Are you sure update this product?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
        inputValue:data,
    }).then((result) => {
        if (result.isConfirmed) {
            return productUpdateApi(id,result.value).then((updateResult)=>{
                return updateResult
            })
        }
    }).catch((error)=>{
        return error
        
    });
}
