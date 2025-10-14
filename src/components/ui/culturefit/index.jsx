import React from "react";
import * as S from "./style.jsx";
import { 핀다, 더스팟, 달파 } from "@/constants/culturefit.js";
import Modal from "@/components/layout/modal/index.jsx";
import Button from "@/components/ui/button/index.jsx";

const CandidateCard = ({ handleNextStep, company }) => {
  const data = company === "핀다" ? 핀다 : company === "달파" ? 달파 : 더스팟;

  return (
    <Modal>
      <S.Container>
        <S.Header>
          <S.CompanyName>{company}</S.CompanyName>
          <S.SubTitle>문화적 성향 요약</S.SubTitle>
        </S.Header>

        <S.Section>
          <S.SectionTitle>🌿 문화 유형</S.SectionTitle>
          <S.TagList>
            <S.Tag highlight>{data.culture_type}</S.Tag>
          </S.TagList>
        </S.Section>

        <S.Section>
          <S.SectionTitle>💡 핵심 가치</S.SectionTitle>
          <S.TagList>
            {data.core_values.map((value) => (
              <S.Tag key={value}>{value}</S.Tag>
            ))}
          </S.TagList>
        </S.Section>

        <S.Section>
          <S.SectionTitle>🧭 평가 기준</S.SectionTitle>
          {Object.entries(data.evaluation_criteria).map(([key, value]) => (
            <S.CriteriaBlock key={key}>
              <S.TagList>
                <S.Tag weight>{`${key} (${value.weight}%)`}</S.Tag>
              </S.TagList>
              <S.TagList>
                {value.keywords.map((kw) => (
                  <S.Tag key={kw}>{kw}</S.Tag>
                ))}
              </S.TagList>
            </S.CriteriaBlock>
          ))}
        </S.Section>

        <S.Section>
          <S.SectionTitle>⭐ 이상적인 인재</S.SectionTitle>
          <S.HighlightBox>{data.ideal_candidate}</S.HighlightBox>
        </S.Section>

        <S.Section>
          <S.SectionTitle>🗂 질문 테마</S.SectionTitle>
          <S.TagList>
            {data.question_themes.map((theme) => (
              <S.Tag key={theme}>{theme}</S.Tag>
            ))}
          </S.TagList>
        </S.Section>

        <S.ButtonWrapper>
          <Button onClick={handleNextStep}>시작하기</Button>
        </S.ButtonWrapper>
      </S.Container>
    </Modal>
  );
};

export default CandidateCard;