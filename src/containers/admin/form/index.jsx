import React, { useState } from "react";
import * as S from "./style";
import Button from "@/components/ui/button/index.jsx";

const QuestionForm = ({ onCancel, onSubmit }) => {
  const [question, setQuestion] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !year || !category) return alert("모든 항목을 입력해주세요!");
    onSubmit?.({ question, year, category });
    setQuestion("");
    setYear("");
    setCategory("");
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Input
        type="text"
        placeholder="추가할 질문을 입력해주세요"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <S.Input
        type="number"
        placeholder="연도를 설정해주세요"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <S.Select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">카테고리를 선택해주세요</option>
        <option value="프론트엔드">프론트엔드</option>
        <option value="백엔드">백엔드</option>
        <option value="디자인">디자인</option>
        <option value="기타">기타</option>
      </S.Select>

      <S.ButtonRow>
        <S.CancelButton type="button" onClick={onCancel}>
          취소
        </S.CancelButton>
        <Button onClick={handleSubmit}>추가</Button>
      </S.ButtonRow>
    </S.Container>
  );
};

export default QuestionForm;
