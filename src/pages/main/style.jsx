import styled from "styled-components";
import {fontSizes} from "@/styles/theme.js";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  height: 100%;
  color: white;
  padding: 0 0 80px 0 ;
  & > h1{
    font-size: 60px;
  }
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 3.68731rem;
  font-size: ${fontSizes.Title};
  transition: 0.2s;
  padding: 1.2rem 3rem;
  background: linear-gradient(
    90deg,
    #150050 0%,
    #3F0071 100%
  );
  &:hover {
    filter: brightness(1.1);
  }
`