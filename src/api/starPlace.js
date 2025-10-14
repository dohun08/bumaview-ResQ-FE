import axiosInstance from "@/lib/axiosInstance.js";

export const getProgress = async () =>{
  const res = await axiosInstance.get("/my/progress")
  return res
}