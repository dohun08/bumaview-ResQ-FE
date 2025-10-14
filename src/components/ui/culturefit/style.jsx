import styled from "styled-components";

export const Container = styled.div`
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 90%;
    padding: 28px;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const CompanyName = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: #222;
`;

export const SubTitle = styled.p`
  font-size: 15px;
  color: #666;
  margin-top: 4px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 1.5rem 0;
`;

export const SectionTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  letter-spacing: -0.3px;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-left: 4px;
`;

export const Tag = styled.span`
  background-color: ${({ highlight }) =>
    highlight ? "#007BFF" : "#f4f5f7"};
  color: ${({ highlight }) => (highlight ? "#fff" : "#333")};
  border: ${({ weight }) => (weight ? "1px solid #007BFF" : "1px solid #e0e0e0")};
  padding: 7px 14px;
  border-radius: 20px;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: -0.2px;
`;

export const CriteriaBlock = styled.div`
  margin-top: 8px;
  padding: 10px 0 10px 12px;
  border-left: 3px solid #007bff;
  background-color: #fafbfc;
  border-radius: 8px;
`;

export const HighlightBox = styled.div`
  background-color: #f8f9fa;
  padding: 16px 20px;
  border-radius: 14px;
  font-size: 15px;
  color: #444;
  line-height: 1.6;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;