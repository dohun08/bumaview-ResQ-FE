import Planet from "@/components/layout/Planet/index.jsx";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";
import {useEffect, useState} from "react";
import useModalStore from "@/store/useModalStore.js";
import ReadQuestion from "@/containers/interview/step/readQuestion/index.jsx";
import First from "@/containers/interview/fist/index.jsx";
import InterviewLayout from "@/components/layout/interview/index.jsx";
import AnswerQuestion from "@/containers/interview/step/answerQuestion/index.jsx";
import InterviewResult from "@/containers/interview/Result/index.jsx";
import CultureFit from "@/components/ui/culturefit/index.jsx"

export default function Interview() {
  const {location} = useNavigationWithTransition()
  const planetData = location.state.state.planet

  const [isFirst, setIsFirst] = useState(true);
  const [step, setStep] = useState(0);

  const {openModal, closeModal} = useModalStore()
  const handleNextStep = () =>{
    closeModal()
    setStep(step+1)
  }
  const handleStartClick = () => {
    setIsFirst(false)
    setStep(1)
  }
  useEffect(() => {
    openModal()
  }, []);
  useEffect(() => {
    if(location.state.state.result){
      setStep(4)
      setIsFirst(false)
    }
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
        {step === 1 && <CultureFit handleNextStep={handleNextStep} company={planetData.name} />}
        {step === 2 && <ReadQuestion step={step} setStep={setStep} />}
        {step === 3 && <AnswerQuestion step={step} setStep={setStep} />}
        {step === 4 && <InterviewResult response={location.state.state.response} />}
      </InterviewLayout>
    </Planet>
  )
}