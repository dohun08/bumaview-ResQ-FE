import { create } from "zustand";

const useTailQuestionsStore = create((set) => ({
  tailQuestions: {}, // { "질문 내용": "답변 내용" } 형태로 저장
  tailIndex: 0,
  addTailQuestion: (q) =>
    set((state) => {
      let questionText = q?.trim() || "";
      if (questionText === "") {
        const emptyCount =
          Object.keys(state.tailQuestions).filter((key) => key.startsWith("비어있음")).length + 1;
        questionText = `비어있음${emptyCount+1}`;
      }
      console.log("questionText : ", questionText)
      return {
        tailQuestions: {
          ...state.tailQuestions,
          [questionText]: questionText.startsWith("비어있음") ? "비어있음" : "",
        },
        tailIndex: questionText.startsWith("비어있음") ? state.tailIndex + 1 : state.tailIndex,
      };
  }),
addTailAnswer: (index, answerText) =>
    set((state) => {
      const questionKeys = Object.keys(state.tailQuestions);
      const currentQuestion = questionKeys[index];
      if (!currentQuestion) return state; // 범위 초과 시 무시

      return {
        tailQuestions: {
          ...state.tailQuestions,
          [currentQuestion]: answerText || "",
        },
        tailIndex: index + 1, // 다음 질문으로 이동
      };
    }),

  // 모든 상태 초기화
  clearAll: () => set({ tailQuestions: {}, tailIndex: 0 }),
}));

export default useTailQuestionsStore;
