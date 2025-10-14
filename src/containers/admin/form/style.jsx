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


export const SearchSelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  background-color: #fff;
  color: #333;
  outline: none;
  
  &:focus {
    border-color: #666;
  }
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
