import React from 'react';
import * as S from './style';
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";
import {useUserStore} from "@/store/useUser.js";

const Header = () => {
 const {handleNavigate} = useNavigationWithTransition()
  const navItems = [
        {
            label: '홈',
            href: '/'
        },
        
        {
            label: '면접',
            href: '/planet'
        },
        
        {
            label: '별자리',
            href: '/startPlace'
        }
    ]
  const {id} = useUserStore()
  return (
      <S.HeaderContainer>
        <S.LogoContainer>
          <S.LogoImage
            src="/logo.svg"
            alt="Reserve Logo"
          />
        </S.LogoContainer>
        <S.Nav>
          {navItems.map((item)=>
            <S.NavItem onClick={()=>handleNavigate(item.href)} key={item.label}>
              {item.label}
            </S.NavItem>
          )}
        </S.Nav>
        {id ? (
          <S.UserId>{id}</S.UserId>
        ) : (
          <S.ActionButton onClick={()=>handleNavigate("/login")}>로그인</S.ActionButton>
        )}
      </S.HeaderContainer>
  );
};

export default Header;
