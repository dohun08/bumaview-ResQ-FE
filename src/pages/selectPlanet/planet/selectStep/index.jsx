import * as S from "./style.jsx";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";

export default function SelectStep({planet}) {
  const steps = [1, 2, 3, 4, 5];
  const {handleNavigate} = useNavigationWithTransition()
  const handleStepClick = (step) => {
    handleNavigate(`/interview/${planet.name}/${step}`, {state : {planet}})
  };
  return (
    <S.StepContainer>
      {steps.map((step) => {
        const isActive = step === 1; // Only first step is active initially
        const isDisabled = !isActive;
        return (
          <S.Step
            onClick={() => {handleStepClick(step)}}
            key={step} 
            $isActive={isActive}
            $isDisabled={isDisabled}
          >
            {step}
          </S.Step>
        );
      })}
    </S.StepContainer>
  );
}
