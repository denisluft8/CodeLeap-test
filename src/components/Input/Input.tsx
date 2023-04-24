import { InputStyled, LabelStyled } from "./Input.styles";

interface InputProps {
  inputId: string;
  text: string;
  inputType: string;
  inputLarge?: boolean;
  pHolder: string;
  
}

export const InputS = ({ inputId, inputType, inputLarge, pHolder, text }: InputProps) => {

  return (
    <>
      <LabelStyled htmlFor={inputId}>{text}</LabelStyled>
      <InputStyled
        height={inputLarge ? "74px" : "32px"}
        type={inputType}
        id={inputId}
        name={inputId}
        placeholder={pHolder}
      />
    </>
  );
};
