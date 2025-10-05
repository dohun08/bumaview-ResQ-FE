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
  SPulseEffect, QuestionBox, BtnBox
} from "@/pages/interview/style";
import useInterview from "@/store/useInterview.js";
import useModalStore from "@/store/useModalStore.js";
import useTimerStore from "@/store/useTimer.js";

export default function VoiceToText({setStep}) {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [isDone, setIsDone] = useState(false);

  const {openModal} = useModalStore()
  const {addAnswer} = useInterview()
  const handleNextStet = async () => {
    // 어떤조건하에 질문을 계속할지, 분석할지 결정하기
    // 내가 했던 질문의 답변 저장하기
    await addAnswer({
      answer: transcript,
      question : 'ex'
    })
    if(!isDone){
      // 질문 계속하기
      setStep(1)
    }else if(isDone){
      // 답변 분석하기
      setStep(3)
      openModal()
    }
  }
  // 컴포넌트 마운트 시 자동으로 음성 인식 시작
  useEffect(() => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({
        continuous: true,
        language: 'ko-KR'
      });
    }

    // 컴포넌트 언마운트 시 음성 인식 중지
    return () => {
      SpeechRecognition.stopListening();
    };
  }, [browserSupportsSpeechRecognition]);

  const {stopTimer} = useTimerStore()
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
      {!isDone ? (
        <QuestionBox>
          <h2>질문에 답변해주세요</h2>
          <SMikeBox>
            {listening && <SPulseEffect />}
            <SMikeIcon
              src={"/mike.svg"}
              alt="마이크"
            />
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
          <STranscriptBox aria-live="polite">
            {transcript }
          </STranscriptBox>
          <BtnBox>
            <Button onClick={handleNextStet}>다음질문받기</Button>
          </BtnBox>
        </>
      )}
    </SAnswerContainer>
  );
}