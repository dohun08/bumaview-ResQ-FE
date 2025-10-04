import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px;
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 100px);
  color: white;
  font-size: 24px;
  text-align: center;
`;

export const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 5px;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

export const PrevButton = styled(Button)`
  background-color: #4CAF50;
`;

export const NextButton = styled(Button)`
  background-color: #2196F3;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;