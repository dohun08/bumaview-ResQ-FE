import * as S from "./style"
import Button from "@/components/ui/button/index.jsx";

export default function First({planetData, handleStartClick}) {
  return(
    <S.ModalContainer>
      <h1>필독!</h1>
      <h2>{planetData.name}의 면접 질문이 나오게 됩니다.</h2>
      <section>
        <p>질문 제시 후15초의 시간이 주어집니다.</p>
        <p>시간동안 질문을 읽은 후 답변에 대답해 주시면 됩니다.</p>
        <p>100초안에 모든 질문에 답하여 병준쌤을 구출해주세요.</p>
        <p>컬쳐핏에 기반하여 채점이 진행됩니다.</p>
        <p>준비가 되면 시작하기를 눌러주세요!</p>
      </section>
      <Button onClick={handleStartClick}>
        시작하기
      </Button>
    </S.ModalContainer>
  )
}