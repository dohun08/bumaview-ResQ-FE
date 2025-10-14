import React, {useEffect, useState} from "react";
import * as S from "./style";
import Button from "@/components/ui/button/index.jsx";
import {useLocation} from "react-router-dom";
import {CATEGORY_OPTIONS} from "@/constants/categoryOptions.js";
import {COMPANY_RES} from "@/constants/companyList.js";

const QuestionForm = ({ onCancel, onSubmit }) => {
  const [question, setQuestion] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [companyMap, setCompanyMap] = useState({});
  const [company, setCompany] = useState("");

  useEffect(() => {
    const map = {};
    COMPANY_RES.forEach(c => {
      map[c.id] = c.name;
    });
    setCompanyMap(map);
  }, []);

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(location.pathname === "/admin/question/update"){
      onSubmit?.({ content : question, question_id : location.state.id });
    }
    else {
      onSubmit?.({ question, year, category, company_id: Number(company) });
    }
    setQuestion("");
    setYear("");
    setCategory("");
    setCompany("");
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Input
        type="text"
        placeholder="추가할 질문을 입력해주세요"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      {location.pathname === "/admin/question/update" ? null :
        <><S.Input
        type="number"
        placeholder="연도를 설정해주세요"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <S.SearchSelect
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      >
        <option value="">회사 선택</option>
        {Object.entries(companyMap).map(([id, name]) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </S.SearchSelect>

      <S.SearchSelect
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {CATEGORY_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.SearchSelect>
      </>}

      <S.ButtonRow>
        <S.CancelButton type="button" onClick={onCancel}>
          취소
        </S.CancelButton>
        <Button onClick={handleSubmit}>{location.pathname === "/admin/question/update" ? "수정" : "추가"}</Button>
      </S.ButtonRow>
    </S.Container>
  );
};

export default QuestionForm;