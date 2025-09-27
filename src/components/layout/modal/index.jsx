import React, { useEffect, useState } from 'react';
import * as S from './style.js';
import useModalStore from '@/store/useModalStore';

const Modal = ({ children }) => {
  const [modalElement, setModalElement] = useState(null);
  const { isOpen, closeModal } = useModalStore();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalElement && !modalElement.contains(event.target)) {
        closeModal();
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
  }, [isOpen, closeModal, modalElement]);

  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContent ref={setModalElement}>
        {children}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
