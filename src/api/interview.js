import axiosInstance from "@/lib/axiosInstance.js";

export const getInterview = async (company_id) => {
  const res = await axiosInstance.get(`/interview?company_id=${company_id}`)
  if (res.status !== 200){
    alert("실패")
  }
  return res.data
}

export const postInterview = async (data) => {
  const res = await axiosInstance.post("/interview", data)
  if (res.status !== 200){
    alert("실패")
  }
  return res.data
}

// 꼬리질문 어케 받아올거임? 조건이 뭐야
export const getTailInterview = async (company_id, question, answer) => {
  const res = await axiosInstance.get("/interview/tail", {
    params:{
      company_id : company_id,
      question : question,
      answer : answer
    }
  })
  if (res.status !== 200){
    alert("실패")
  }
  return res.data
}