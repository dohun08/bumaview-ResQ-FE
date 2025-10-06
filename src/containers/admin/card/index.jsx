import * as S from "./style";

const QuestionList = ({q, toggleMenu, openMenuId, deleteQuestion, handleNavi}) => {
  return (
    <S.QuestionCard>
      <S.QMark>Q.</S.QMark>
      <S.TextGroup>
        <S.QuestionText>{q.text}</S.QuestionText>
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