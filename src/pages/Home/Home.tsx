import { InputS } from "../../components/Input/Input";
import { FormContainer, HomePage } from "./Home.styles";

export const Home = () => {
  return (
    <HomePage>
      <div>
        <FormContainer action="submit">
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
        </FormContainer>
      </div>
    </HomePage>
  );
};
