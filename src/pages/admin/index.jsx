import React, {useState} from "react";
import Space from "@/components/layout/space/index.jsx";
import * as S from "./style.jsx";
import Button from "@/components/ui/button/index.jsx";
import QuestionList from "@/containers/admin/card/index.jsx";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";
import { CATEGORY_OPTIONS } from "@/constants/categoryOptions";
import { COMPANY_RES } from "@/constants/companyList";
import {useQuestions, useQuestionMutations} from "@/hooks/useQuestion";

export default function Admin() {
  const [page, setPage] = useState(0);
  const [size] = useState(10);
  const [company, setCompany] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null);

  const { handleNavigate } = useNavigationWithTransition();
  const {deleteQuestion} = useQuestionMutations()

  const { data, isLoading, isError } = useQuestions({
    company_id: company,
    year,
    category,
    page,
    size
  });

  const questions = data?.content || [];
  const total = data?.total_pages || 0;

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleNavi = () => {
    handleNavigate("/admin/question");
  };

  const handleDelete = async (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await deleteQuestion.mutateAsync(id);
    }
  };

  const handlePageChange = (newPage) => setPage(newPage);
  if (isError) return <div>Error loading questions</div>;

  return (
    <Space showUnBox={false}>
      <S.AdminContainer>
        <S.AdminHeader>
          <img src={"/spacevote.svg"} alt={"인공위성"} />
        </S.AdminHeader>

        <S.Container>
          <S.SearchSelect
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
              setPage(0);
            }}
          >
            <option value="">전체 회사</option>
            {COMPANY_RES.map(company => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </S.SearchSelect>

          <S.SearchInput
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              setPage(0);
            }}
            placeholder="연도"
            type="number"
          />

          <S.SearchSelect
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(0);
            }}
          >
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </S.SearchSelect>

          <Button onClick={handleNavi}>질문 추가</Button>

          {questions && questions.length > 0 ? questions.map((q) => (
            <QuestionList
              key={q.id}
              q={q}
              toggleMenu={toggleMenu}
              openMenuId={openMenuId}
              deleteQuestion={handleDelete}
            />
          ))
            :
            isLoading ?
            <div style={{margin:"4rem 1rem"}}>불러오는 중...</div>
              : <div style={{margin:"4rem 1rem"}}>질문이 없습니다.</div>
          }

          <S.PaginationWrapper>
            <Button
              onClick={() => {
                if(page === 0) return ;
                handlePageChange(page - 1)
              }}
            >
              이전
            </Button>
            <S.PaginationInfo>
              {page+1} / {total}
            </S.PaginationInfo>
            <Button
              onClick={() => {
                if(page >= total) return;
                handlePageChange(page + 1)
              }}
            >
              다음
            </Button>
          </S.PaginationWrapper>
        </S.Container>
      </S.AdminContainer>
    </Space>
  );
}