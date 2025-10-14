import React, { useState } from 'react';
import * as S from './style';
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";
import { useUserStore } from "@/store/useUserStore.js";
import { useAuth } from "@/hooks/useAuth.js";

const Header = () => {
  const { handleNavigate } = useNavigationWithTransition();
  const { id, role } = useUserStore();
  const { logout } = useAuth();
  const [showLogout, setShowLogout] = useState(false);

  const navItems = [
    { label: '홈', href: '/' },
    { label: '면접', href: '/planet' },
    { label: '별자리', href: '/startPlace' },
    (role === 'ADMIN' ? { label: '관리자', href: '/admin' } : {})
  ];

  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <S.LogoImage
          onClick={()=>handleNavigate("/")}
          src="/logo.svg"
          alt="Reserve Logo"
        />
      </S.LogoContainer>
      <S.Nav>
        {navItems.map((item) =>
          <S.NavItem onClick={() => handleNavigate(item.href)} key={item.label}>
            {item.label}
          </S.NavItem>
        )}
      </S.Nav>
      {id ? (
        <div style={{ position: "relative", display: "inline-block" }}>
          <S.UserId onClick={() => setShowLogout((v) => !v)}>{id}</S.UserId>
          {showLogout && (
            <S.LogoutButton onClick={() => logout.mutate()}>
              로그아웃
            </S.LogoutButton>
          )}
        </div>
      ) : (
        <S.ActionButton onClick={() => handleNavigate("/login")}>로그인</S.ActionButton>
      )}
    </S.HeaderContainer>
  );
};

export default Header;
