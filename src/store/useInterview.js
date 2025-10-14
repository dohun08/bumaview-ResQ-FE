import { create } from "zustand";

const useInterviewStore = create((set) => ({
  questions: {}, // { "질문 내용": "답변 내용" } 형태로 저장
  index: 0,

  // 질문 추가 (값은 비어있게)
  addQuestion: (questionList) =>
    set(() => {
      const questionObj = {};
      questionList.forEach((q) => {
        questionObj[q.question] = "";
      });
      console.log(questionObj, "완성")
      return { questions: questionObj, index: 0 };
    }),

  // 답변 추가 (인덱스로 찾아서 값 업데이트)
  addAnswer: (index, answerText) =>
    set((state) => {
      const questionKeys = Object.keys(state.questions);
      const currentQuestion = questionKeys[index];
      if (!currentQuestion) return state; // 범위 초과 시 무시

      return {
        questions: {
          ...state.questions,
          [currentQuestion]: answerText,
        },
        index: index + 1, // 다음 질문으로 이동
      };
    }),

  // 모든 상태 초기화
  clearAll: () => set({ questions: {}, index: 0 }),
}));

export default useInterviewStore;