import { create } from "zustand";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const categoryStore = create((set) => ({
  categoryList: [],
  categoryListApi: async () => {
    try {
      const axiosPublic = useAxiosPublic(); // Instantiate within the function if context-dependent
      const res = await axiosPublic.get(`/category/list`);
      
      if (res.data.status === 'success') {
      console.log(res);
        set({ categoryList: res.data.data });
      } else {
        console.error('Failed to get category data list: ', res.data.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error fetching category list:', error);
    }
  }
}));

export default categoryStore;
