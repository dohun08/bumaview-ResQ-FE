import { useEffect, useRef, useState } from 'react';
import * as S from "./style";
import SelectStep from "./selectStep";

const PlanetModal = ({ planet, onClose, isOpen }) => {
  const [showSteps, setShowSteps] = useState(false);
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

  const handlePlanetBg = () => {
    setShowSteps(true)
  }
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
          {planet.name}에 대한 설명이 여기에 들어갑니다.{!showSteps && '면접을 시작하려면 아래 버튼을 클릭하세요.'}
        </S.PlanetDescription>
        {showSteps ? (
          <SelectStep planet={planet} />
        ) : (
          <S.StartButton onClick={handlePlanetBg}>
            면접 시작하기
          </S.StartButton>
        )}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default PlanetModal;