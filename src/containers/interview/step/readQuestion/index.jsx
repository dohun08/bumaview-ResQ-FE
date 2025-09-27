import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

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

// scaleX/scaleY 애니메이션
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
  transform-origin: right center; /* 오른쪽 기준으로 줄어듦 */
  transform: scaleX(1);
  ${({ run }) =>
    run &&
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
  /* 위쪽 기준으로 줄어듦 */
  transform: scaleY(1);
  ${({ run }) =>
    run &&
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
  transform-origin: left center; /* 왼쪽 기준으로 줄어듦 */
  transform: scaleX(1);
  ${({ run }) =>
    run &&
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
  /* 아래쪽 기준으로 줄어듦 */
  transform-origin: top center;
  transform: scaleY(1);
  ${({ run }) =>
    run &&
    css`
      animation: ${shrinkY} 2s linear 6s forwards;
    `}
`;

export default function ReadQuestion({setStep}) {
  const [run, setRun] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRun(true), 100);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => setRun(true), 100);
    const stepTimer = setTimeout(() => setStep(2), 8100); // 6.1초 후에 step 2로 이동
    return () => {
      clearTimeout(timer);
      clearTimeout(stepTimer);
    };
  }, [setStep]);
  return (
    <TimerContainer>
      <div>문제를 읽어주세요</div>
      <Top run={run} />
      <Right run={run} />
      <Bottom run={run} />
      <Left run={run} />
    </TimerContainer>
  );
}