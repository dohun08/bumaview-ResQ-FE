import Planet from "@/components/layout/Planet/index.jsx";
import {useParams} from "react-router-dom";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";
import Modal from "@/components/layout/modal/index.jsx";
import {useEffect, useState} from "react";
import useModalStore from "@/store/useModalStore.js";
import * as S from "./style.jsx";
import Fist from "@/containers/interview/fist/index.jsx";
import ReadQuestion from "@/containers/interview/step/readQuestion/index.jsx";
import First from "@/containers/interview/fist/index.jsx";
import InterviewLayout from "@/components/layout/interview/index.jsx";
import AnswerQuestion from "@/containers/interview/step/answerQuestion/index.jsx";

export default function Interview() {
  const params = useParams()
  const {location} = useNavigationWithTransition()
  const planetData = location.state.state.planet

  const [isFirst, setIsFirst] = useState(true);
  const [step, setStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

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
        <Modal>
            <First
              planetData={planetData}
              handleStartClick={handleStartClick}
            />
        </Modal>
      }
      <InterviewLayout>
        {step === 1 &&
          <ReadQuestion setStep={setStep} />
        }
        {step === 2 && <AnswerQuestion setStep={setStep} />}
        {step === 3 && <></>}
        {isCompleted &&
          <Modal>
            <></>
          </Modal>
        }
      </InterviewLayout>
    </Planet>
  )
}