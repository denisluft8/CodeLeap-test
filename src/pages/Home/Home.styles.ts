import styled from "styled-components";

export const HomePage = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin-top: 40px;
`;

export const FormContainer = styled.form`
  border: 1px solid #999999;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  min-height: 334px;
  left: 584px;
  top: 104px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;

  & > h2 {
    width: 299px;
    height: 22px;
    left: 608px;
    top: 128px;
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 12px;
  }
`;

export const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
