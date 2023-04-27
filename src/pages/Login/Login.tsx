import { saveUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginPage } from "./Login.styles";

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
      <form action="submit" onSubmit={handleSubmit}>
        <input onChange={(e) => setUser(e.target.value)}></input>
        <button type="submit">send</button>
      </form>
    </LoginPage>
  );
};
