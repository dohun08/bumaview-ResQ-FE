// src/components/VoiceToText.jsx
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "@/components/ui/button/index.jsx";
import {colors} from "@/styles/theme.js"; // mike 아이콘 경로

// 파동 애니메이션
const pulse = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
`;

const AnswerContainer = styled.div`
  width: 45%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  position: relative;
  background: white;
  overflow: hidden;
  padding: 40px;
  box-sizing: border-box;
`;

const Hr = styled.hr`
  width: 100%;
  border: none;
  border-top: 3px solid ${colors.primary};
  margin: 20px 0;
`;
const QuestionText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #2b2160;
  margin-bottom: 10px;
`;

const MikeBox = styled.div`
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: #2b2160;
`

const TranscriptBox = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  margin-bottom: 20px;
  white-space: pre-wrap;
`;


const MikeIcon = styled.img`
  width: 80px;
  height: 80px;
  margin: 20px 0;
  position: relative;
  z-index: 1;
  &.speaking::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(76, 175, 80, 0.5);
    transform: translate(-50%, -50%);
    animation: ${pulse} 1.2s infinite;
    z-index: -1;
  }
`;

export default function VoiceToText() {
  const [result, setResult] = useState("");
  const [transcript, setTranscript] = useState("");
  const [finalTranscript, setFinalTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [lang, setLang] = useState("ko-KR");

  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setTranscript(
        "이 브라우저는 Web Speech API(SpeechRecognition)를 지원하지 않습니다. (Chrome 권장)"
      );
      return;
    }

    const recog = new SpeechRecognition();
    recog.interimResults = true;
    recog.maxAlternatives = 1;
    recog.continuous = true;
    recog.lang = lang;

    recog.onresult = (event) => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const r = event.results[i];
        if (r.isFinal) {
          setFinalTranscript((prev) => prev + r[0].transcript + " ");
        } else {
          interimTranscript += r[0].transcript;
        }
      }

      // 화면에는 확정 + 실시간 중간 표시
      setTranscript(finalTranscript + interimTranscript);
    };

    recog.onend = () => {
      setIsRecording(false);
    };

    recog.onerror = (e) => {
      console.error("SpeechRecognition error", e);
      setTranscript("오류 발생: " + e.error);
      setIsRecording(false);
    };

    recognitionRef.current = recog;
    if (!recognitionRef.current) return;
    setTranscript("말하면서 답변해주시면 됩니다!");
    setIsRecording(true);
    recognitionRef.current.start();
  }, [lang, finalTranscript]);


  const handleStop = () => {
    if (!recognitionRef.current) return;
    recognitionRef.current.stop();
    setIsRecording(false);
    // 최종 누적 텍스트 화면에 보장
    setResult(finalTranscript);
    setTranscript(finalTranscript);
  };

  return (
    <AnswerContainer>
      <h1>질문</h1>
      <QuestionText>질문 예시: 자기소개를 해주세요.</QuestionText>
      <Hr />
      <h2>질문에 답변해주세요</h2>
      <MikeBox>
        <MikeIcon src={"/mike.svg"} alt="마이크" className={isRecording ? "speaking" : ""} />
      </MikeBox>

      <TranscriptBox aria-live="polite">{transcript}</TranscriptBox>
      {/*{result && <p>{result}</p>}*/}
      <Button onClick={handleStop} >답변완료</Button>
    </AnswerContainer>
  );
}