import styled, {keyframes} from "styled-components";

const dots = keyframes`
  0% { content: ''; }
  25% { content: '.'; }
  50% { content: '..'; }
  75% { content: '...'; }
  100% { content: ''; }
`;

const expandHeight = keyframes`
  0% {
    height: 0;
    padding-top: 0;
    padding-bottom: 0;
    opacity: 1;
  }
  50%{
    height: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    opacity: 1;
  }
  100% {
    height: auto;
    padding-top: 0;
    padding-bottom: 0;
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LoadingText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #2b2160;
  text-align: center;
  margin: 2rem 0;

  &::after {
    content: '';
    animation: ${dots} 2s steps(1) infinite;
    display: inline-block;
    width: 30px;
    text-align: left;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  animation: ${expandHeight} 0.6s ease-out forwards;
`;

export const SuccessTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #000;
  margin-bottom: 0.5rem;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out 0.7s forwards;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  color: #000;
  margin-bottom: 2.5rem;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out 0.9s forwards;
`;

export const ScoreCircle = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 6px solid ${(props)=>props.$isSuccess ? "#7FDB6C" : "#FF6B6B"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out 1.1s forwards;
`;

export const Score = styled.span`
  font-size: 64px;
  font-weight: bold;
  color: ${(props)=>props.$isSuccess ? "#7FDB6C" : "#FF6B6B"};
  line-height: 1;
`;

export const ResultSection = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out 1.3s forwards;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 1rem;
`;

export const ResultList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ResultItem = styled.li`
  font-size: 16px;
  color: #666;
  margin-bottom: 0.5rem;
  padding-left: 0;
  
  &::before {
    content: '- ';
    color: #666;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out 1.5s forwards;
`;
