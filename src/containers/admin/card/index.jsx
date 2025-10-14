import * as S from "./style";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";

const QuestionList = ({q, toggleMenu, openMenuId, deleteQuestion}) => {
  const {handleNavigate} = useNavigationWithTransition()

  const handleNavi = (id) =>{
    handleNavigate("/admin/question/update",{
      id : id
    })
  }
  return (
    <S.QuestionCard>
      <S.QMark>Q.</S.QMark>
      <S.TextGroup>
        <h3>{q.company_name}</h3>
        <S.QuestionText>{q.question}</S.QuestionText>
        <S.SubText>
          {q.year} <span>{q.category}</span>
        </S.SubText>
      </S.TextGroup>
      <img style={{cursor:"pointer"}} onClick={()=>toggleMenu(q.id)} src={"/hambug.svg"} />
      <S.MoreButton onClick={() => toggleMenu(q.id)}>
        {openMenuId === q.id && (
          <S.Menu>
            <S.MenuItem onClick={()=>handleNavi(q.id)}>수정</S.MenuItem>
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