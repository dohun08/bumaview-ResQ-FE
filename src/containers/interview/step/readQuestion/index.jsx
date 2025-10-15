import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import useTimerStore from "../../../../store/useTimerStore.js";
import useInterview from "@/store/useInterview.js";
import useTailQuestionsStore from "@/store/useTailQuestionsStore.js";

const TimerContainer = styled.div`
  width: 45%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: relative;
  background: white;
  overflow: hidden;
  font-size: 24px;
  font-weight: bold;
`;

const lineCommon = css`
  position: absolute;
  background: #B2FFB4;
  z-index: 2;
`;

// scaleX/scaleY 애니메이션 (8초로 조정)
const shrinkX = keyframes`
  from { transform: scaleX(1); }
  to   { transform: scaleX(0); }
`;
const shrinkY = keyframes`
  from { transform: scaleY(1); }
  to   { transform: scaleY(0); }
`;

/* 상단 라인 */
const Top = styled.div`
  ${lineCommon};
  top: 20px;
  left: 20px;
  height: 8px;
  width: calc(100% - 40px);
  transform-origin: right center;
  transform: scaleX(1);
  ${({ $run }) =>
    $run &&
    css`
      animation: ${shrinkX} 2s linear forwards;
    `}
`;

/* 우측 라인 */
const Right = styled.div`
  ${lineCommon};
  top: 20px;
  right: 20px;
  width: 8px;
  height: calc(100% - 40px);
  transform-origin: bottom center;
  transform: scaleY(1);
  ${({ $run }) =>
    $run &&
    css`
      animation: ${shrinkY} 2s linear 2s forwards;
    `}
`;

/* 하단 라인 */
const Bottom = styled.div`
  ${lineCommon};
  bottom: 20px;
  right: 20px;
  height: 8px;
  width: calc(100% - 40px);
  transform-origin: left center;
  transform: scaleX(1);
  ${({ $run }) =>
    $run &&
    css`
      animation: ${shrinkX} 2s linear 4s forwards;
    `}
`;

/* 좌측 라인 */
const Left = styled.div`
  ${lineCommon};
  bottom: 20px;
  left: 20px;
  width: 8px;
  height: calc(100% - 40px);
  transform-origin: top center;
  transform: scaleY(1);
  ${({ $run }) =>
    $run &&
    css`
      animation: ${shrinkY} 2s linear 6s forwards;
    `}
`;

const QuestionText = styled.p`
  width: 80%;
  text-align: center;
  word-break: keep-all;    
  overflow-wrap: break-word;
  line-height: 1.5;
`

const dots = keyframes`
  0% { content: ''; }
  25% { content: '.'; }
  50% { content: '..'; }
  75% { content: '...'; }
  100% { content: ''; }
`;

export const LoadingText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #2b2160;
  text-align: center;
  margin: 2rem 0;

  &::after {
    content: '';
    animation: ${dots} 2s steps(1) infinite;
    display: inline-block;
    width: 30px;
    text-align: left;
  }
`;

export default function ReadQuestion({ step, setStep}) {
  const [run, setRun] = useState(false);
  const { setTime, startTimer } = useTimerStore();
  const {questions, index} = useInterview()
  const {tailQuestions, tailIndex} = useTailQuestionsStore()

  useEffect(() => {
    console.log("tailIndex :",tailIndex,"index :", index)
    if (Object.keys(questions).length === 0) {
      return ;
    }
    const timer = setTimeout(() => setRun(true), 100);

    const stepTimer = setTimeout(() => {
      startTimer(); // 타이머 시작
      setStep(step + 1); // 다음 단계로
    }, 8100); // 8.1초 후

    return () => {
      clearTimeout(timer);
      clearTimeout(stepTimer);
    }
  }, [Object.keys(questions).length, step, setStep, setTime, startTimer]);

  if (Object.keys(questions).length === 0) {
    return (
      <TimerContainer>
        <LoadingText>로딩중입니다</LoadingText>
      </TimerContainer>
    )
  }
  return (
    <TimerContainer>
      <QuestionText>
        {tailIndex !== index ?
          Object.keys(tailQuestions)[tailIndex] + "(꼬리질문)"
          : Object.keys(questions)[index]
        }
      </QuestionText>
      <Top $run={run} />
      <Right $run={run} />
      <Bottom $run={run} />
      <Left $run={run} />
    </TimerContainer>
  );
}