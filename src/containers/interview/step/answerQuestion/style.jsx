// style.jsx
import styled from "styled-components";

export const AnswerContainer = styled.div`
  width: 45%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 40px;
  box-sizing: border-box;
`;

export const QuestionText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #2b2160;
  margin-bottom: 10px;
`;

export const InstructionText = styled.div`
  font-size: 16px;
  color: #888;
  margin-bottom: 30px;
  text-align: center;
`;

export const MikeIcon = styled.img`
  width: 80px;
  height: 80px;
  margin: 20px 0;
  opacity: ${props => props.$isRecording ? 1 : 0.5};
  transition: opacity 0.3s;
`;

export const Transcript = styled.div`
  width: 100%;
  min-height: 100px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  white-space: pre-wrap;
  background: #f9f9f9;
  border-radius: 8px;
`;

export const StopButton = styled.button`
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.3s;

  &:hover {
    background: #ff5252;
  }
`;