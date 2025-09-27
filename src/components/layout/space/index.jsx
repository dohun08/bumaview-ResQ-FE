import Header from "@/components/ui/header"
import * as S from "./style"
import {UnBox} from "./style";
import SpaceTravel from "@/components/ui/loading/index.jsx";
import React from "react";
import FallingMeteor from "@/components/ui/FallingMeteor/index.jsx";

export default function Space({ children }) {
    return (
        <S.SpaceContainer>
          <SpaceTravel />
          <FallingMeteor />
            <Header />
            <UnBox />
            <S.Body>
                <S.BgImage src="/bg.svg" alt="space" />
                {children}
            </S.Body>
        </S.SpaceContainer>
    )
}