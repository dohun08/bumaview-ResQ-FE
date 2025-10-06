import Space from "@/components/layout/space/index.jsx";
import * as S from "./style.jsx"
import React, {useState} from "react";
import Button from "@/components/ui/button/index.jsx";
import QuestionList from "@/containers/admin/card/index.jsx";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";
import useDebounce from "@/hooks/useDebounce.js";
import {searchQuestion, deleteQuestion} from "@/api/admin.js";

export default function Admin() {
  const [questions, setQuestions] = useState([
    { id: 1, question: "뭐뭐에 대해서 설명해주세요", year: 2025, category: "프론트엔드", company:"달파" },
    { id: 2, question: "뭐뭐에 대해서 설명해주세요", year: 2025, category: "프론트엔드", company:"달파" },
    { id: 3, question: "뭐뭐에 대해서 설명해주세요", year: 2025, category: "프론트엔드", company:"달파" },
    { id: 4, question: "뭐뭐에 대해서 설명해주세요", year: 2025, category: "프론트엔드", company:"달파" },
  ]);

  const handleDeleteQuestion = async (id) => {
    const res = await deleteQuestion(id);
    if(res){
      debounce();
    }
  };
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };
  const {handleNavigate} = useNavigationWithTransition()
  const handleNavi = () =>{
    handleNavigate("/admin/question")
  }

  const handleSearch = async () =>{
    const data = await searchQuestion()
    setQuestions(data);
  }

  const debounce = useDebounce(handleSearch, 200)

  return (
      <Space>
        <S.AdminContainer>
          <S.AdminHeader>
            <img src={'/spacevote.svg'} alt={"인공위성"} />
          </S.AdminHeader>

          <S.Container>
            <S.SearchInput onChange={debounce} placeholder="질문을 검색해주세요" />
            <Button onClick={handleNavi}>질문 추가</Button>

            <S.Divider />
            {questions.map((q) => (
              <QuestionList
                key={q.id}
                q={q}
                toggleMenu={toggleMenu}
                openMenuId={openMenuId}
                deleteQuestion={handleDeleteQuestion}
              />
            ))}
          </S.Container>
        </S.AdminContainer>
      </Space>
    );
}