import Planet from "@/components/layout/Planet/index.jsx";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";
import {useEffect, useState} from "react";
import useModalStore from "@/store/useModalStore.js";
import ReadQuestion from "@/containers/interview/step/readQuestion/index.jsx";
import First from "@/containers/interview/fist/index.jsx";
import InterviewLayout from "@/components/layout/interview/index.jsx";
import AnswerQuestion from "@/containers/interview/step/answerQuestion/index.jsx";
import InterviewResult from "@/containers/interview/Result/index.jsx";

export default function Interview() {
  const {location} = useNavigationWithTransition()
  const planetData = location.state.state.planet

  const [isFirst, setIsFirst] = useState(true);
  const [step, setStep] = useState(0);

  const {openModal, closeModal} = useModalStore()
  const handleStartClick = () => {
    setIsFirst(false)
    closeModal()
    setStep(1)
  }
  useEffect(() => {
    openModal()
  }, []);

  return(
    <Planet bgImage={planetData.bg}>
      {isFirst &&
            <First
              planetData={planetData}
              handleStartClick={handleStartClick}
            />
      }
      <InterviewLayout>
        {step === 1 && <ReadQuestion setStep={setStep} />}
        {step === 2 && <AnswerQuestion setStep={setStep} />}
        {step === 3 && <InterviewResult />}
      </InterviewLayout>
    </Planet>
  )
}