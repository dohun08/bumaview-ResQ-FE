import styled from "styled-components";

export const AdminContainer = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 0 20vw;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
`
export const AdminHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Container = styled.div`
  width: 100%;
  border-radius: 20px;
  background: white;
  padding: 32px;
  margin: 1rem auto 2rem auto;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  font-size: 15px;
  color: #555;
  margin-bottom: 20px;
  ::placeholder {
    color: #aaa;
  }
`;

export const SearchSelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  background-color: #fff;
  color: #333;
  outline: none;
  margin-bottom: 20px;
  &:focus {
    border-color: #666;
  }
`;

export const Divider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #eee;
`;

export const PaginationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr 1fr;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const PaginationInfo = styled.span`
  font-weight: bold;
  text-align: center;
  font-size: 1.1rem;
  margin: 0 1rem;
`;
