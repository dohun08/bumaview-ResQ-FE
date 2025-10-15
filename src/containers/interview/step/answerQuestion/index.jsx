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
import useTailQuestionsStore from "@/store/useTailQuestionsStore.js";

export default function VoiceToText({ step, setStep }) {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [isDone, setIsDone] = useState(false);
  const [question, setQuestion] = useState("");

  const { openModal } = useModalStore();
  const { addAnswer, index, questions } = useInterviewStore();
  const { addTailQuestion, tailIndex, addTailAnswer, tailQuestions } = useTailQuestionsStore();

  const params = useParams();
  const { stopTimer } = useTimerStore();

  const [isTailLoading, setIsTailLoading] = useState(false);

  useEffect(() => {
    const initialQuestion =
      index !== tailIndex
        ? Object.keys(tailQuestions)[tailIndex] + "(꼬리질문)"
        : Object.keys(questions)[index];

    setQuestion(initialQuestion);
  }, []); // 의존성 배열 비움 → 최초 렌더 시 한 번만 실행

  const handleNextStet = async () => {
    if (tailIndex !== Object.keys(questions).length) {
      setStep(step - 1);
    } else {
      setStep(step + 1);
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

  const handleStop = async () => {
    SpeechRecognition.stopListening();
    setIsDone(true);
    stopTimer();
    const company_id = params.planet === "핀다" ? 1 : params.planet === "달파" ? 2 : 3;
    if (tailIndex === index) {
      await addAnswer(index, transcript);
      setIsTailLoading(true);
      const res = await getTailInterview(
        company_id,
        Object.keys(questions)[index],
        transcript
      );
      addTailQuestion(res.question);
      setIsTailLoading(false);
    } else await addTailAnswer(tailIndex, transcript);
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
      <SQuestionText>{question}</SQuestionText>
      <SHr />

      {!isDone ? (
        <QuestionBox>
          <h2>질문에 답변해주세요</h2>
          <SMikeBox>
            {listening && <SPulseEffect />}
            <SMikeIcon src={"/mike.svg"} alt="마이크" />
          </SMikeBox>

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
          <STranscriptBox aria-live="polite">{transcript}</STranscriptBox>
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