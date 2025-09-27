import styled from "styled-components"

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 12px;
  background-color: #E0E0E0;
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #FFF346;
  transition: width 0.1s ease-in-out;
`;
