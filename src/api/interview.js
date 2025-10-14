import axiosInstance from "@/lib/axiosInstance.js";

export const getInterview = async (company_id) => {
  const res = await axiosInstance.get(`/interview?company_id=${company_id}`)
  return res
}

export const postInterview = async (company_id, questions, answers, tail_questions, tail_answers) => {
  console.log(questions, answers, tail_questions, tail_answers)
  const mergeAlternately = (primary, tail) => {
    if (!tail || tail.length === 0) return primary;
    const merged = [];
    const minLength = Math.min(primary.length, tail.length);
    for (let i = 0; i < minLength; i++) {
      merged.push(primary[i]);
      merged.push(tail[i]);
    }
    if (primary.length > minLength) merged.push(...primary.slice(minLength));
    if (tail.length > minLength) merged.push(...tail.slice(minLength));
    return merged;
  };

  const filteredTail = tail_questions
    .map((q, i) => ({ q, a: tail_answers[i] }))
    .filter(item => item.q && !item.q.includes("비어있음"));

  const filteredTailQuestions = filteredTail.map(item => item.q);
  const filteredTailAnswers = filteredTail.map(item => item.a);

  const mergedQuestions = mergeAlternately(questions, filteredTailQuestions);
  const mergedAnswers = mergeAlternately(answers, filteredTailAnswers);

  const data = {
    company_id,
    question: mergedQuestions,
    answer: mergedAnswers,
  };

  console.log(data)
  console.log("📤 최종 전송 데이터:", data);

  const res = await axiosInstance.post("/interview/evaluate", data);
  return res;
};

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