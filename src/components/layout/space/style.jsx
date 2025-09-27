import styled from "styled-components"

export const SpaceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Body = styled.div`
    width: 100vw;
    height: calc(100vh - 10vh);
    display: flex;
    flex-direction: column;
  justify-content: center;   
  align-items: center;
`
export const UnBox = styled.div`
    width: 100vw;
  height: 10vh;
`
export const BgImage = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -2;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`