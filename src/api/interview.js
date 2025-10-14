import axiosInstance from "@/lib/axiosInstance.js";

export const getInterview = async (company_id) => {
  const res = await axiosInstance.get(`/interview?company_id=${company_id}`)
  return res
}

export const postInterview = async (data) => {
  const res = await axiosInstance.post("/interview", data)
  if (res.status !== 200){
    alert("실패")
  }
  return res.data
}

export const getTailInterview = async (company_id, question, answer) => {
  const res = await axiosInstance.get("/interview/tail", {
    params:{
      company_id : company_id,
      question : question,
      answer : answer
    }
  })
  return res
}