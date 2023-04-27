import { ButtonS, InputS, Posts } from "../../components";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { FormContainer, HomePage, PostsContainer } from "./Home.styles";
import { ButtonDiv } from "../../components/Posts/Posts.styles";
import { useSelector } from "react-redux/es/exports";
import { IState } from "../../redux/reducers";

export const Home = () => {
  const [userData, setUserData] = useState([]);
  const user = useSelector((state: IState) => state.user);
  const [form, setForm] = useState<{
    username: string;
    title: string;
    content: string;
  }>({
    username: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    setForm({ ...form, username: user });
    loadInformation();
  }, [userData]);

  useEffect(() => {
    loadInformation();
  }, [form]);

  const loadInformation = () => {
    api.get("careers/?format=json").then(({ data }) => {
      setUserData(data.results);
    });
  };

  const sendInformation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api
      .post("careers/", form)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <HomePage>
      <FormContainer action="submit" onSubmit={(e) => sendInformation(e)}>
        <h2>What's on your mind?</h2>
        <InputS
          inputId={"title"}
          text={"Title"}
          pHolder={"Hello World"}
          onChange={(val: string) => setForm({ ...form, title: val })}
        />
        <InputS
          inputId={"content"}
          text={"Content"}
          inputLarge
          pHolder={"Content Here"}
          onChange={(val: string) => setForm({ ...form, content: val })}
        />
        <ButtonDiv>
          <ButtonS
            text="Create"
            disabled={Object.values(form).some((value) => value === "")}
          />
        </ButtonDiv>
      </FormContainer>

      <PostsContainer>
        {userData &&
          userData.map((data: any) => (
            <Posts
              title={data.title}
              userName={data.username}
              time={data.created_datetime}
              content={data.content}
              key={data.id}
              postId={data.id}
            />
          ))}
      </PostsContainer>
    </HomePage>
  );
};
