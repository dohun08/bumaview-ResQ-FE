import axiosInstance from "@/lib/axiosInstance.js";


// 파일 내려받기
// 전체 질문 가져오기
// search 할 때, 질문명으로는?
// update할 때, 해당 질문의 자세한 정보를 가져와야함
export const addQuestion = (question)=>axiosInstance.post("/question/addition", question)

export const deleteQuestion = async (questionId)=>{
  const res = await axiosInstance.delete(`/question/delete/${questionId}`);
  return res.data;
}

export const updateQuestion = (question)=>axiosInstance.put(`/question/update`, question)

export const searchQuestion = async (company_id, year, category, page = 1, size = 10) => {
  try {
    // 값이 있는 것만 params에 포함
    const params = { page, size };
    if (company_id) params.company_id = company_id;
    if (year) params.year = year;
    if (category) params.category = category;

    const res = await axiosInstance.get("/question/search", { params });
    return res;
  } catch (error) {
    console.error(error);
    alert("질문 검색 중 오류가 발생했습니다.");
    return null;
  }
}
export const uploadFile = async (file) => {
  console.log(file);
  const res = await axiosInstance.post("/question/bulk-upload", file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

import axios from "axios";

export async function downloadFile() {
  const res = await axios.get(
    "http://www.jojaemin.com/question/sample-file",
    {
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );

  // 파일명 파싱
  const cd = res.headers["content-disposition"] || "";
  const match = cd.match(/filename\*?=(?:UTF-8''|")?([^\";]+)/i);
  const filename = match ? decodeURIComponent(match[1]) : "question_upload_sample.xlsx";

  const blobUrl = URL.createObjectURL(new Blob([res.data]));
  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(blobUrl);
}