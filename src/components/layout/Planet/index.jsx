import * as S from "./style"
import SpaceTravel from "@/components/ui/loading/index.jsx";
import React from "react";

export default function Planet({ children, bgImage }) {
  return (
    <S.PlanetContainer>
      <SpaceTravel />
      <S.Body>
        <S.BgImage src={bgImage} alt="planetBg"/>
        {children}
      </S.Body>
    </S.PlanetContainer>
  )
}