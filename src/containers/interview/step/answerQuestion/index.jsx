import React, { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Button from "@/components/ui/button/index.jsx";
import {
  SAnswerContainer,
  SHr,
  SQuestionText,
  SMikeBox,
  STranscriptBox,
  SMikeIcon,
  SPulseEffect,
  QuestionBox,
  BtnBox
} from "@/pages/interview/style";
import useInterview from "@/store/useInterview.js";
import useModalStore from "@/store/useModalStore.js";
import useTimerStore from "@/store/useTimer.js";

export default function VoiceToText({ setStep }) {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [isDone, setIsDone] = useState(false);
  const [connectionMsg, setConnectionMsg] = useState(""); // ✅ 연결 상태 메시지 상태

  const { openModal } = useModalStore();
  const { addAnswer } = useInterview();

  const handleNextStet = async () => {
    await addAnswer({
      answer: transcript,
      question: 'ex'
    });
    if (!isDone) {
      setStep(1);
    } else if (isDone) {
      setStep(3);
      openModal();
    }
  };

  useEffect(() => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({
        continuous: true,
        language: 'ko-KR'
      });

      // ✅ 연결 알림 표시
      setConnectionMsg("🎙️ 음성 인식이 시작되었습니다!");
      const timer = setTimeout(() => setConnectionMsg(""), 2000); // 2초 후 사라짐

      return () => {
        clearTimeout(timer);
        SpeechRecognition.stopListening();
      };
    }
  }, [browserSupportsSpeechRecognition]);

  const { stopTimer } = useTimerStore();
  const handleStop = () => {
    SpeechRecognition.stopListening();
    console.log("최종 답변:", transcript);
    setIsDone(true);
    stopTimer();
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <SAnswerContainer>
        <p>이 브라우저는 음성 인식을 지원하지 않습니다. Chrome 브라우저를 사용해주세요.</p>
      </SAnswerContainer>
    );
  }

  return (
    <SAnswerContainer>
      <h1>질문</h1>
      <SQuestionText>질문 예시: 자기소개를 해주세요.</SQuestionText>
      <SHr />

      {/* ✅ 음성 인식 연결 메시지 표시 */}
      {connectionMsg && (
        <p style={{ color: "#16a34a", fontWeight: "600", marginBottom: "1rem" }}>
          {connectionMsg}
        </p>
      )}

      {!isDone ? (
        <QuestionBox>
          <h2>질문에 답변해주세요</h2>
          <SMikeBox>
            {listening && <SPulseEffect />}
            <SMikeIcon src={"/mike.svg"} alt="마이크" />
          </SMikeBox>

          {/* ✅ 현재 인식 중 상태 표시 */}
          {listening && (
            <p style={{ color: "#2563eb", marginTop: "8px" }}>
              현재 음성을 인식 중입니다...
            </p>
          )}

          <STranscriptBox aria-live="polite">
            {transcript || "말하면서 답변해주시면 됩니다!"}
          </STranscriptBox>

          <BtnBox>
            <Button onClick={handleStop}>답변완료</Button>
          </BtnBox>
        </QuestionBox>
      ) : (
        <>
          <h1>답변</h1>
          <STranscriptBox aria-live="polite">
            {transcript}
          </STranscriptBox>
          <BtnBox>
            <Button onClick={handleNextStet}>다음질문받기</Button>
          </BtnBox>
        </>
      )}
    </SAnswerContainer>
  );
}