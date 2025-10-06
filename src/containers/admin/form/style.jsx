import styled from "styled-components";
import { colors } from "@/styles/theme.js";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: white;
  width: 40%;
  padding: 3rem;
  border-radius: 20px;
  margin: 0 auto;
  font-family: "Pretendard", sans-serif;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  font-size: 15px;
  color: #333;
  outline: none;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    border-color: ${colors.primary};
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 14px 18px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  font-size: 15px;
  color: ${({ value }) => (value ? "#333" : "#bbb")};
  background-color: #fff;
  appearance: none;
  outline: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='14' width='14' viewBox='0 0 24 24'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 16px center;
`;

export const ButtonRow = styled.div`
  display: grid;
  gap: 8px;
  margin-top: 12px;
  grid-template-columns: 1fr 1fr;
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: 12px 0;
  background: #bfbfbf;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  font-family: 'SancheonUju', sans-serif;
`;
