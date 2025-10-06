import styled from "styled-components";

export const AdminContainer = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 0 20vw;
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
  margin: 0 auto;
  padding: 32px;
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

export const Divider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #eee;
`;