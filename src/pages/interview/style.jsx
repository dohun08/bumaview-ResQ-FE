import styled, { keyframes } from "styled-components";

// 파동 애니메이션
const pulse = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
`;

export const SAnswerContainer = styled.div`
  width: 45%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 20px;
  position: relative;
  background: white;
  overflow: hidden;
  padding: 40px;
  box-sizing: border-box;
`;

export const SHr = styled.hr`
  width: 100%;
  border: none;
  border-top: 3px solid ${props => props.theme.primary};
  margin: 20px 0;
`;

export const BtnBox = styled.div`
  margin-top: auto;
  width: 100%;
`
export const QuestionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > *{
    text-align: center;
    margin: 0 auto;
  }
`

export const SQuestionText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #2b2160;
  margin-bottom: 10px;
`;

export const SMikeBox = styled.div`
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: #2b2160;
  position: relative;
  margin-top: 2rem;
`;

export const STranscriptBox = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  margin-bottom: 20px;
  white-space: pre-wrap;
  margin-top: 1rem;
`;

export const SMikeIcon = styled.img`
  width: 80px;
  height: 80px;
  position: relative;
  z-index: 1;
`;

export const SPulseEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(76, 175, 80, 0.5);
  transform: translate(-50%, -50%);
  animation: ${pulse} 1.2s infinite;
  z-index: 0;
`;
