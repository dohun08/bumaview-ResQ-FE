import * as S from "./style";
import React, { useState, useEffect } from "react";
import Modal from "@/components/layout/modal/index.jsx";
import Button from "@/components/ui/button/index.jsx";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";

export default function InterviewResult() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const {handleNavigate} = useNavigationWithTransition()
  const handleComplete = () =>{
    handleNavigate("/planet")
  }
  return (
    <Modal>
      {isLoading ? (
        <S.LoadingText>면접관이 평가중입니다</S.LoadingText>
      ) : (
        <S.ResultContainer>
          <S.SuccessTitle>축하합니다!</S.SuccessTitle>
          <S.SubTitle>병준쌤 구출에 성공하였습니다.</S.SubTitle>

          <S.ScoreCircle>
            <S.Score>98</S.Score>
          </S.ScoreCircle>

          <S.ResultSection>
            <S.SectionTitle>분석결과</S.SectionTitle>
            <S.ResultList>
              <S.ResultItem>회사 기준별 점수 (1~5)</S.ResultItem>
              <S.ResultItem>각 기준별 피드백 (한두 문장)</S.ResultItem>
              <S.ResultItem>전체 종합 평가 (한 문장)</S.ResultItem>
              <S.ResultItem>개선할 점 할 가지</S.ResultItem>
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