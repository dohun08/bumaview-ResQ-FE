import React from "react";
import * as S from "./style";

const Character = ({isSuccess}) => {
  return <S.CharacterImage src={isSuccess ? "/successMan.svg" : "/failedMan.svg"} alt="Success Man" />;
};

export default Character;

