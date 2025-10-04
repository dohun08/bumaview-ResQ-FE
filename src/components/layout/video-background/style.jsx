import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const StyledVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
`;

export const UnBox = styled.img`
  width: 100%;
  height: 10vh;
`
export const FastForwardButton = styled.button`
  position: fixed;
  left: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
  opacity: 0.3;
  z-index: 10;
  
  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
