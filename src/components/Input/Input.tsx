import { InputStyled, LabelStyled } from "./Input.styles";

interface InputProps {
  inputId: string;
  text: string;
  inputType: string;
  pHolder: string;
}

export const InputS = ({ inputId, inputType, pHolder, text }: InputProps) => {
  return (
    <>
      <LabelStyled htmlFor={inputId}>{text}</LabelStyled>
      <InputStyled type={inputType} id={inputId} name={inputId} placeholder={pHolder} />
    </>
  );
};
