import { ButtonS } from "../../components/Button/Button";
import { InputS } from "../../components/Input/Input";
import { FormContainer, HomePage } from "./Home.styles";

export const Home = () => {
  return (
    <HomePage>
      <FormContainer action="submit">
        <h2>What's on your mind?</h2>
        <InputS
          inputId={"title"}
          text={"Title"}
          inputType={"text"}
          pHolder={"Hello World"}
        />
        <InputS
          inputId={"content"}
          text={"Content"}
          inputType={"text"}
          pHolder={"Content Here"}
        />
        <ButtonS text="Create" />
      </FormContainer>
    </HomePage>
  );
};
