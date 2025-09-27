
import styled from 'styled-components';
import { colors } from '@/styles/theme';
import { fontSizes } from '../../../styles/theme';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 100px;
  height: 10vh;
  background-color: rgba(21,0,80, 0.2);
  width: 100vw;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const LogoImage = styled.img`
  width: 100px;
  height: 62px;
  object-fit: contain;
`;

export const ActionButton = styled.button`
    all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 16px;
  background-color: #ffffff;
  color: ${colors.secondary};
  border: none;
  border-radius: 8px;
  font-family: 'SancheonUju', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  cursor: pointer;
  transition: background-color 0.12s ease, box-shadow 0.12s ease;

  &:hover {
    background-color: #e4e4e4;
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: space-between;
`;

export const NavItem = styled.p`
    font-size: ${fontSizes.Body};
  color: white;
  cursor: pointer;
`