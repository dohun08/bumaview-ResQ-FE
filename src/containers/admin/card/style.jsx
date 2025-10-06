import styled from "styled-components";
import { colors } from "@/styles/theme.js";

export const QuestionCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  margin-bottom: 12px;
  position: relative;
`;

export const QMark = styled.div`
  font-weight: 800;
  font-size: 22px;
  color: ${colors.primary};
  margin-right: 12px;
`;

export const TextGroup = styled.div`
  flex: 1;
`;

export const QuestionText = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #111;
  margin-bottom: 4px;
`;

export const SubText = styled.div`
  font-size: 13px;
  color: #999;
  span {
    color: #666;
    margin-left: 4px;
  }
`;

export const MoreButton = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Menu = styled.div`
  position: absolute;
  top: 24px;
  right: 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 10;
`;

export const MenuItem = styled.div`
  padding: 10px 16px;
  font-size: 14px;
  width: max-content;
  color: ${({ delete: isDelete }) => (isDelete ? "#ff2d55" : "#333")};
  cursor: pointer;
  &:hover {
    background: #f9f9f9;
  }
`;