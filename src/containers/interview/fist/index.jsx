import * as S from "./style"
import Button from "@/components/ui/button/index.jsx";
import Modal from "@/components/layout/modal/index.jsx";
import {useEffect} from "react";
import {getInterview} from "@/api/interview.js";
import {useParams} from "react-router-dom";
import useInterview from "@/store/useInterview.js";

export default function First({ planetData, handleStartClick}) {

  const {addQuestion} = useInterview()
  const params = useParams()

  const company_id = params.planet === "핀다" ? 1 : params.planet === "달파" ? 2 : 3
  useEffect(() => {
    if(company_id){
      handleInterview();
    }
  }, [company_id]);
  const handleInterview = async () => {
    const res = await getInterview(company_id);
    addQuestion(res.questions)
  }
  return(
    <Modal>
      <S.ModalContainer>
        <h1>필독!</h1>
        <h2>{planetData.name}의 면접 질문이 나오게 됩니다.</h2>
        <section>
          <p>질문 제시 후15초의 시간이 주어집니다.</p>
          <p>시간동안 질문을 읽은 후 답변에 대답해 주시면 됩니다.</p>
          <p>100초안에 모든 질문에 답하여 병준쌤을 구출해주세요.</p>
          <p>컬쳐핏에 기반하여 채점이 진행됩니다.</p>
        </section>
        <Button onClick={handleStartClick}>
          다음으로
        </Button>
      </S.ModalContainer>
    </Modal>
  )
}