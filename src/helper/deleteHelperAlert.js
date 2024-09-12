import Swal from "sweetalert2";


export async function deleteAlert() {
    return await Swal.fire({
        allowOutsideClick: false,
        title: 'Are you sure?',
        text: "You won't be this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    });

}