import styled from "styled-components";

export const ReadQuestionContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  gap: 2rem;
  width: 100%;
  height: 100%;
  padding: 2rem 8rem;
  position: relative;
  overflow: hidden;
`

export const Timer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  color: white;
`

export const Content = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 2rem;
  position: relative;
`

export const WebcamContainer = styled.div`
  width: 20%;
  height: 100%;
  margin-top: auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  position: relative;
  z-index: 1;
`

export const Video = styled.video`
  width: 155px;
  aspect-ratio: 16 / 16;
  object-fit: cover;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 150%;
  z-index: 100;
`

export const SpaceShoot = styled.img`
  z-index: 1000;
  width: 95%;
  height: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
`

export const RopeAndManContainer = styled.div`
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: flex-start;
  z-index: 50;
  height: 100%;
  position: relative;
`

export const Rope = styled.img`
  position: absolute;
  top: 0;
  left: 70%;
  transform: translateX(-50%);
  width: 30px;
  height: auto;
  object-fit: contain;
`

export const Man = styled.img`
  position: absolute;
  bottom: 300px;
  left: 70%;
  transform: translateX(-50%);
  width: 160px;
  height: auto;
  object-fit: contain;
`

export const Choi = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;
`

export const ChoiAnimation = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -280px;
  left: 0;
  z-index: 100;
  animation: ${({ $isAnimating }) => $isAnimating ? 'descend 100s linear forwards' : 'none'};
  
  @keyframes descend {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(50vh); /* Move down by 50% of viewport height */
    }
  }
`