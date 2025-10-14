import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 100%;
  padding: 0 16px;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgba(21, 0, 80, 0.8) 0%,
    rgba(63, 0, 113, 0.8) 100%
  ),
  #FFFFFF;

  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'SancheonUju', sans-serif;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(21, 0, 80, 1) 0%,
      rgba(63, 0, 113, 1) 100%
    ),
    #FFFFFF;
    box-shadow: 0 4px 12px rgba(21, 0, 80, 0.4);
  }

  &:active {
    box-shadow: 0 2px 6px rgba(21, 0, 80, 0.3);
  }
  ${props => props.$disabled && `
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  `}
`;


export default function Button({onClick, children, disabled}){
  return(
    <ButtonContainer $disabled={disabled} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}