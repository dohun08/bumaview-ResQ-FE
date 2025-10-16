import * as S from "./style";
import React, { useState, useEffect, useRef } from "react";
import Modal from "@/components/layout/modal/index.jsx";
import Button from "@/components/ui/button/index.jsx";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";
import useTimerStore from "@/store/useTimerStore.js";
import { postInterview } from "@/api/interview.js";
import { useParams } from "react-router-dom";
import useInterviewStore from "@/store/useInterview.js";
import useTailQuestionsStore from "@/store/useTailQuestionsStore.js";
import Character from "@/components/ui/character/Index.jsx";

export default function InterviewResult({ response }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [overallEvaluation, setOverallEvaluation] = useState("");
  const [strength, setStrength] = useState("");
  const audioRef = useRef(null);
  const audioRef2 = useRef(null);

  const params = useParams();
  const company_id = params.planet === "핀다" ? 1 : params.planet === "달파" ? 3 : 2;
  const { questions } = useInterviewStore();
  const { tailQuestions } = useTailQuestionsStore();
  const { resetTimer, time } = useTimerStore();
  const { handleNavigate } = useNavigationWithTransition();

  useEffect(() => {
    resetTimer();
    useInterviewStore.getState().clearAll(); // interview 상태 초기화
    useTailQuestionsStore.getState().clearAll(); // tail 질문 상태 초기화
    if (response) {
      setIsLoading(false);
      const { score: apiScore, feedback, overall_evaluation, strength } = response.result;
      const computedScore = apiScore * 20;
      setScore(computedScore);
      setFeedback(Array.isArray(feedback) ? feedback.join("\n") : String(feedback || ""));
      setOverallEvaluation(String(overall_evaluation || ""));
      setStrength(Array.isArray(strength) ? strength.join("\n") : String(strength || ""));
      setIsSuccess(apiScore >= 3 && time > 0);
      // 죽음 음성 실행
      if(apiScore < 3 || time === 0){
        audioRef.current && audioRef.current.play();
      }
      else{
        audioRef2.current && audioRef2.current.play();
      }
    } else {
      handleSubmit();
    }
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
      const computedScore = apiScore * 20;
      setScore(computedScore);
      setFeedback(Array.isArray(feedback) ? feedback.join("\n") : String(feedback || ""));
      setOverallEvaluation(String(overall_evaluation || ""));
      setStrength(Array.isArray(strength) ? strength.join("\n") : String(strength || ""));
      setIsSuccess(apiScore >= 3 && time > 0);
      setIsLoading(false);
      // 죽음 음성 실행
      if(apiScore < 3 || time === 0){
        audioRef.current && audioRef.current.play();
      }else{
        audioRef2.current && audioRef2.current.play();
      }
    }
  };

  const handleComplete = () => {
    if (isSuccess) {
      handleNavigate("/starPlace");
    } else {
      handleNavigate("/planet");
    }
  };

  return (
    <Modal>
      {isLoading ? (
        <S.LoadingText>면접관이 평가중입니다</S.LoadingText>
      ) : (
        <>
          <Character isSuccess={isSuccess} />
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
        </>
      )}
      {/* audio element to play /aaaa.m4a */}
      <audio ref={audioRef} src="/sound/aaaa.m4a" preload="auto" style={{ display: "none" }} />
      <audio ref={audioRef2} src="/sound/heart.m4a" preload="auto" style={{ display: "none" }} />
    </Modal>
  );
}