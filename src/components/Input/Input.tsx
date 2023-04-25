import { InputStyled, LabelStyled, TextAreaStyled } from "./Input.styles";

interface InputProps {
  inputId: string;
  inputLarge?: boolean;
  onChange: (val: string) => void;
  pHolder: string;
  text: string;
}

export const InputS = ({
  inputId,
  inputLarge,
  onChange,
  pHolder,
  text,
}: InputProps) => {
  return (
    <>
      <LabelStyled htmlFor={inputId}>{text}</LabelStyled>
      {inputLarge ? (
        <TextAreaStyled
          id={inputId}
          name={inputId}
          onChange={(e: any) => onChange(e.target.value)}
          placeholder={pHolder}
        />
      ) : (
        <InputStyled
          height={inputLarge ? "74px" : "32px"}
          type="text"
          id={inputId}
          name={inputId}
          onChange={(e: any) => onChange(e.target.value)}
          placeholder={pHolder}
        />
      )}
    </>
  );
};
