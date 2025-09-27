import styled from "styled-components";
import {colors, fontSizes} from "@/styles/theme.js";

export const SelectPlanetContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 6fr;
  width: 100%;
  height: 100%;
  gap: 4rem;
  place-items: center;
`
export const HeadText = styled.h1`
  color: white;
  font-size: 32px;
  width: max-content;
  text-align: center;
`
export const PlanetBox = styled.section`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  align-self: start;
`
export const Planet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin: ${({$margin}) => 
    $margin === "up" ? "0 0 6rem 0" : 
    $margin === "down" ? "6rem 0 0 0" : 
    "0 1rem"
  };
  transition: all 0.5s ease-in-out;
  position: relative;
  z-index: ${({$isSelected}) => $isSelected ? 100 : 1};
`
export const PlanetImg = styled.img`
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  filter: drop-shadow(0 0 0 transparent);
  cursor: pointer;
  animation: ${({$isSelected}) => !$isSelected ? 'float 3s ease-in-out infinite' : 'none'};
  animation-delay: ${({ $index }) => $index * 0.3}s;
  transform: ${({$isSelected}) => $isSelected ? 'scale(2) translateY(0)' : 'scale(1)'};
  position: ${({$isSelected}) => $isSelected ? 'fixed' : 'static'};
  z-index: ${({$isSelected}) => $isSelected ? 1000 : 'auto'};
  left: ${({$isSelected}) => $isSelected ? '50%' : 'auto'};
  top: ${({$isSelected}) => $isSelected ? '50%' : 'auto'};
  transform: ${({$isSelected}) => $isSelected ? 'translate(-50%, -50%) scale(2.5)' : 'translateY(0)'};
  pointer-events: ${({$isSelected}) => $isSelected ? 'none' : 'auto'};
  
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  &:hover {
    animation: none;
    transform: translateY(-20px);
    filter: ${({ theme, $shadow }) => 
      $shadow ? `drop-shadow(0 10px 20px ${$shadow})` : 'none'};
  }
`
export const NameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 100px;
  padding: 0.6rem 2rem;
  font-size: ${fontSizes.Headline};
  color: ${colors.primary};
  transition: all 0.5s ease-in-out;
  opacity: ${({$isSelected}) => $isSelected ? 0 : 1};
  transform: ${({$isSelected}) => $isSelected ? 'translateY(20px)' : 'translateY(0)'};
`