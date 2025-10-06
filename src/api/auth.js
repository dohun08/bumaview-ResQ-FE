import axiosInstance from "@/lib/axiosInstance.js"

export const login = async (data) => {
  try{
    const res = await axiosInstance.post("/login", data)
    if(res.status!==200){
      console.log(res)
    }
    return res.data;
  }catch (err){
    console.error(err)
  }
};