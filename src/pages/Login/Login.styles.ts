import styled from "styled-components";

export const LoginPage = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const FormLoginContainer = styled.form`
  box-sizing: border-box;
  width: 500px;
  height: 205px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  & > h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 20px;
  }
`;
