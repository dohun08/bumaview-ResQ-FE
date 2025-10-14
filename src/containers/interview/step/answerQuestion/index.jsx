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
import useInterviewStore from "@/store/useInterview.js";
import useModalStore from "@/store/useModalStore.js";
import useTimerStore from "@/store/useTimerStore.js";
import {getTailInterview} from "@/api/interview.js";
import {useParams} from "react-router-dom";

export default function VoiceToText({ step, setStep }) {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [isDone, setIsDone] = useState(false);

  const { openModal } = useModalStore();
  const { addAnswer, index, questions } = useInterviewStore();

  const handleNextStet = async () => {
    await addAnswer(index, transcript);
    if (index !== 4) {
      setStep(step-1);
    } else {
      setStep(step+1);
      openModal();
    }
  };

  useEffect(() => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({
        continuous: true,
        language: 'ko-KR'
      });

      return () => {
        SpeechRecognition.stopListening();
      };
    }
  }, [browserSupportsSpeechRecognition]);

  const [isTailLoading, setIsTailLoading] = useState(false);
  const params = useParams()
  const { stopTimer } = useTimerStore();
  const handleStop = async () => {
    SpeechRecognition.stopListening();
    setIsDone(true);
    stopTimer();
    const company_id = params.planet === "핀다" ? 1 : params.planet === "달파" ? 2 : 3
    setIsTailLoading(true)
    const res = await getTailInterview(
      company_id,
      Object.keys(questions)[index],
      transcript
    );
    setIsTailLoading(false)
    console.log(res)
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
      <SQuestionText>{Object.keys(questions)[index]}</SQuestionText>
      <SHr />

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
            <Button onClick={handleNextStet} disabled={isTailLoading}>
              {isTailLoading ? "질문 분석중" : "다음"}
            </Button>
          </BtnBox>
        </>
      )}
    </SAnswerContainer>
  );
}