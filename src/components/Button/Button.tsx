import { ButtonStyled } from "./Button.styles";

interface ButtonProps {
  bgColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  textColor?: string;
  border?: boolean;
  disabled?: boolean;
}

export const ButtonS = ({
  bgColor = "#7695ec",
  border,
  disabled,
  onClick,
  text,
  textColor = "#fff",
}: ButtonProps) => {
  return (
    <>
      <ButtonStyled
        border={border}
        type="submit"
        bgColor={bgColor}
        onClick={onClick}
        textColor={textColor}
        disabled={disabled}
      >
        {text}
      </ButtonStyled>
    </>
  );
};
