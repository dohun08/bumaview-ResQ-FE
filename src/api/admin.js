import axiosInstance from "@/lib/axiosInstance.js";


// 파일 내려받기
// 전체 질문 가져오기
// search 할 때, 질문명으로는?
// update할 때, 해당 질문의 자세한 정보를 가져와야함
export const addQuestion = (question)=>axiosInstance.post("/question/addition", question)
export const deleteQuestion = async (questionId)=>{
  const res = await axiosInstance.delete(`/question/delete`, questionId);
  if(res.status !== 200){
    alert("실패")
  }
  return res.data;
}
export const updateQuestion = (questionId, question)=>axiosInstance.patch(`/question/update`, question)

export const searchQuestion = async (company, year, category)=>{
  const res = await axiosInstance.get(`/question?company=${company}&year=${year}&category=${category}`);
  if(res.status !== 200){
    alert("실패")
  }
  return res.data
}

export const uploadFile = async (file) =>{
  const res = await axiosInstance.post("/file/upload", file)
  if (res.status !== 200){
    alert("실패")
  }
  return res.data
}