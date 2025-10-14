import axiosInstance from "@/lib/axiosInstance.js"


export const login = async (data) => {
  try{
    const res = await axiosInstance.post("/auth/login", data)
    return res;
  }catch (err){
    console.error(err)
  }
};

export async function logout() {
  try{
    const res = await axiosInstance.post("/auth/logout")
    return res;
  }catch (err){
    console.error(err)
  }
}
