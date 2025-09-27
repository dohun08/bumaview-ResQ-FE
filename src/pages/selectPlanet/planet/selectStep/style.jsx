import styled from "styled-components";
import { colors } from "@/styles/theme.js";

export const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  position: relative;
`;

export const Step = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  background-color: ${({ $isActive, $isDisabled }) => 
    $isActive ? "#ecd649" : 
    $isDisabled ? colors.gray : "#ecd649"};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: ${({ $isDisabled }) => $isDisabled ? 'not-allowed' : 'pointer'};
  position: relative;
  z-index: 2;
  margin: 0 1.5rem;
  opacity: ${({ $isDisabled }) => $isDisabled ? 0.6 : 1};
  
  ${({ $isDisabled }) => !$isDisabled && `
    &:hover {
      box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.25);
      transform: translateY(-3px);
    }
  `}
`;
