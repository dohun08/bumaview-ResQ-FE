import Space from "@/components/layout/space/index.jsx"
import * as S from "./style"
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";

export default function Main() {
  const {handleNavigate} = useNavigationWithTransition()
  const handleStartClick = () => {
    handleNavigate("/planet")
  }
  return(
      <Space>
        <S.MainContainer>
          <h1>면접을 통해 구출해주세요!</h1>
          <S.Button onClick={handleStartClick}>
            시작하기
          </S.Button>
        </S.MainContainer>
      </Space>
  )
}   