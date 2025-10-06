import * as S from "./style";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";

const QuestionList = ({q, toggleMenu, openMenuId, deleteQuestion}) => {
  const {handleNavigate} = useNavigationWithTransition()

  const handleNavi = () =>{
    handleNavigate("/admin/question/update")
  }
  return (
    <S.QuestionCard>
      <S.QMark>Q.</S.QMark>
      <S.TextGroup>
        <S.QuestionText>{q.question}({q.company})</S.QuestionText>
        <S.SubText>
          {q.year} <span>{q.category}</span>
        </S.SubText>
      </S.TextGroup>
      <img style={{cursor:"pointer"}} onClick={()=>toggleMenu(q.id)} src={"/hambug.svg"} />
      <S.MoreButton onClick={() => toggleMenu(q.id)}>
        {openMenuId === q.id && (
          <S.Menu>
            <S.MenuItem onClick={handleNavi}>수정</S.MenuItem>
            <S.MenuItem delete onClick={() => deleteQuestion(q.id)}>
              삭제
            </S.MenuItem>
          </S.Menu>
        )}
      </S.MoreButton>
    </S.QuestionCard>
  );
};

export default QuestionList;