import styled from "styled-components";

interface ButtonStyleProps {
  bgColor?: string;
  border?: boolean;
  textColor?: string;
}

export const ButtonStyled = styled.button<ButtonStyleProps>`
  width: 120px;
  height: 32px;
  left: 1192px;
  top: 382px;
  color: ${(props) => props.textColor};
  border: ${(props) => (props.border ? "1px solid #999" : "none")};
  background: ${(props) => props.bgColor};
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-left: 12px;
  cursor: pointer;

  &:disabled {
    filter: grayscale(100%);
  }

  &:hover {
    filter: opacity(80%);
  }
`;
