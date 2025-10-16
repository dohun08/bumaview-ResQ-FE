import { useEffect, useRef } from 'react';
import * as S from "./style";
import { getProgress } from "@/api/interview.js";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";

const PlanetModal = ({ planet, onClose, isOpen }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const {handleNavigate} = useNavigationWithTransition()
  const handlePlanetBg = async () => {
    const company_id = planet.name === "핀다" ? 1 : planet.name === "달파" ? 3 : 2;
    try {
      const res = await getProgress(company_id);
      if (res && res.company_id) {
        handleNavigate(`/interview/${planet.name}/${1}`, {state : {
            planet,
          result : true,
            response : res
          }});
      }
    } catch (error) {
      console.error(error, 1)
      handleNavigate(`/interview/${planet.name}/${1}`, {state : {planet}});
    }
  };

  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContent ref={modalRef}>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        <S.PlanetImage
          src={planet.img}
          alt={planet.name}
        />
        <S.PlanetTitle>{planet.name}</S.PlanetTitle>
        <S.PlanetDescription>
          {planet.name}에 대한 설명이 여기에 들어갑니다.
          면접을 시작하려면 아래 버튼을 클릭하세요.
        </S.PlanetDescription>
        <S.StartButton onClick={handlePlanetBg}>
          면접시작하기
        </S.StartButton>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default PlanetModal;