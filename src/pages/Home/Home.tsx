import {
  ButtonS,
  DeleteModal,
  EditModal,
  InputS,
  Posts,
} from "../../components";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { FormContainer, HomePage, PostsContainer } from "./Home.styles";

export const Home = () => {
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState("denis");
  const [form, setForm] = useState<{
    username: string;
    title: string;
    content: string;
  }>({
    username: userName,
    title: "",
    content: "",
  });

  useEffect(() => {
    loadInformation();
  }, []);

  const loadInformation = () => {
    api.get("careers/?format=json").then(({ data }) => {
      setUserData(data.results);
      console.log(data.results);
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
      <FormContainer action="submit">
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
        <ButtonS text="Create" onClick={(e: any) => sendInformation(e)} />
      </FormContainer>

      <PostsContainer>
        {userData &&
          userData.map((data: any) => (
            <>
              <Posts
                title={data.title}
                user={data.username}
                time={data.created_datetime}
                content={data.content}
                key={data.id}
              />
              <EditModal />
              <DeleteModal />
            </>
          ))}
      </PostsContainer>
    </HomePage>
  );
};
