import * as S from "./style";
import React, { useState, useEffect } from "react";
import Modal from "@/components/layout/modal/index.jsx";
import Button from "@/components/ui/button/index.jsx";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";
import useTimerStore from "@/store/useTimerStore.js";
import { postInterview } from "@/api/interview.js";
import { useParams } from "react-router-dom";
import useInterviewStore from "@/store/useInterview.js";
import useTailQuestionsStore from "@/store/useTailQuestionsStore.js";

export default function InterviewResult() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("")
  const [overallEvaluation, setOverallEvaluation] = useState("")
  const [strength, setStrength] = useState("")

  const params = useParams();
  const company_id = params.planet === "핀다" ? 1 : params.planet === "달파" ? 2 : 3;
  const { questions } = useInterviewStore();
  const { tailQuestions } = useTailQuestionsStore();
  const { resetTimer, time } = useTimerStore();
  const { handleNavigate } = useNavigationWithTransition();

  useEffect(() => {
    handleSubmit();
  }, [company_id]);

  const handleSubmit = async () => {
    const res = await postInterview(
      company_id,
      Object.keys(questions),
      Object.values(questions),
      Object.keys(tailQuestions),
      Object.values(tailQuestions)
    );
    if (res && res.result) {
      const { score: apiScore, feedback, overall_evaluation, strength } = res.result;
      const computedScore = apiScore * 25;
      setScore(computedScore);
      setFeedback(
        Array.isArray(feedback) ? feedback.join("\n") : String(feedback || "")
      );
      setOverallEvaluation(String(overall_evaluation || ""));
      setStrength(
        Array.isArray(strength) ? strength.join("\n") : String(strength || "")
      );
      setIsSuccess(apiScore >= 3 && time > 0);
      setIsLoading(false);
    }
  }

  const handleComplete = () => {
    resetTimer();
    useInterviewStore.getState().clearAll(); // interview 상태 초기화
    useTailQuestionsStore.getState().clearAll(); // tail 질문 상태 초기화
    if(isSuccess){
      handleNavigate("/starPlace");
    } else {
      handleNavigate("/planet");
    }
  }

  return (
    <Modal>
      {isLoading ? (
        <S.LoadingText>면접관이 평가중입니다</S.LoadingText>
      ) : (
        <S.ResultContainer>
          <S.SuccessTitle>{isSuccess ? "축하합니다!" : "실패하셨습니다.."}</S.SuccessTitle>
          <S.SubTitle>{isSuccess ? "병준쌤 구출에 성공하였습니다." : "병준쌤 구출에 실패하였습니다."}</S.SubTitle>

          <S.ScoreCircle $isSuccess={isSuccess}>
            <S.Score $isSuccess={isSuccess}>{score}</S.Score>
          </S.ScoreCircle>

          <S.ResultSection>
            <S.SectionTitle>분석결과</S.SectionTitle>
            <S.ResultList>
              <S.ResultItem>{feedback}</S.ResultItem>
              <S.ResultItem>{overallEvaluation}</S.ResultItem>
              <S.ResultItem>{strength}</S.ResultItem>
            </S.ResultList>
          </S.ResultSection>

          <S.ButtonContainer>
            <Button onClick={handleComplete}>완료</Button>
          </S.ButtonContainer>
        </S.ResultContainer>
      )}
    </Modal>
  );
}