import React, { useState } from 'react';
import * as S from './style';
import Space from "@/components/layout/space/index.jsx";
import Button from "@/components/ui/button/index.jsx";
import {login} from "@/api/auth.js";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = async () => {
    await login({
      user_id : id,
      password : pw
    })
  };

  return (
    <Space>
      <S.LoginContainer>
        <S.LogoWrapper>
          <S.LogoText>
            <img src="/logo.svg" alt="logo" style={{height: '64px', marginLeft: '4px'}} />
          </S.LogoText>
        </S.LogoWrapper>
        <S.InputBox>
          <S.Input
            type="text"
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <S.Icon src="/person.svg" alt="person" />
        </S.InputBox>
        <S.InputBox>
          <S.Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={pw}
            onChange={e => setPw(e.target.value)}
          />
          <S.Icon src="/password.svg" alt="password" />
        </S.InputBox>
        <S.ForgotPassword href="#">비밀번호를 잊으셨나요?</S.ForgotPassword>
        <Button onClick={handleLogin} >로그인</Button>
      </S.LoginContainer>
    </Space>
  );
};

export default Login;
