import { useLoadingStore } from "@/store/useLoading.js";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Spinner = styled.div`
  border: 8px solid #f3f3f3; // 회색 테두리
  border-top: 8px solid #3498db; // 파란색
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

export default function Loading() {
  const { isLoading } = useLoadingStore();
  if (!isLoading) return null;

  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
}