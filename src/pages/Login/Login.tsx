import { saveUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormLoginContainer, LoginPage } from "./Login.styles";
import { ButtonS, InputS } from "../../components";
import { ButtonDiv } from "../../components/Posts/Posts.styles";

export const Login = () => {
  const [user, setUser] = useState("");
  const redirect = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(saveUser(user));
    setTimeout(() => {
      redirect("/home");
    }, 1000);
  };

  return (
    <LoginPage>
      <FormLoginContainer onSubmit={handleSubmit}>
        <h2>Welcome to CodeLeap network!</h2>
        <InputS
          inputId={"login"}
          onChange={(e) => setUser(e)}
          pHolder={"John doe"}
          text={"Please enter your username"}
        />
        <ButtonDiv>
          <ButtonS text={"ENTER"} disabled={user === "" ? true : false} />
        </ButtonDiv>
      </FormLoginContainer>
    </LoginPage>
  );
};
