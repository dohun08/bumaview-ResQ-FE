import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 400px;
  margin: 40px auto 100px auto;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 48px 32px 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const LogoImg = styled.img`
  height: 64px;
  margin-right: 8px;
`;

export const LogoText = styled.span`
  font-family: 'SancheonUjuOTF-Regular', sans-serif;
  font-size: 56px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 2px;
  display: flex;
  align-items: center;
`;

export const InputBox = styled.div`
  width: 100%;
  background: #f8f8f8;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
  height: 56px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 18px;
  color: #888;
  outline: none;
  padding: 0 8px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  opacity: 0.6;
`;

export const ForgotPassword = styled.a`
  color: ${({ theme }) => theme.sub1};
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 32px;
  align-self: flex-start;
  cursor: pointer;
  text-decoration: none;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 16px;
  border: none;
  background: linear-gradient(90deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.92;
  }
`;
