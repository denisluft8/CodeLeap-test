import { ButtonStyled } from "./Button.styles"

interface ButtonProps{
    text: string;
}

export const ButtonS = ({text}: ButtonProps) =>{
    return(
        <>
        <ButtonStyled type="submit">{text}</ButtonStyled>
        </>
    )
}