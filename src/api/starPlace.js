import axiosInstance from "@/lib/axiosInstance.js";

export const getProgress = async () =>{
  const res = await axiosInstance.get("/progress")
  if (res.status !== 200){
    alert("실패")
  }
  return res.data
}