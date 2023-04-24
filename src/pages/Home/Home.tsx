import { ButtonS, InputS, Posts } from "../../components";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { FormContainer, HomePage, PostsContainer } from "./Home.styles";

export const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    loadInformation();
  }, []);

  const loadInformation = () => {
    api.get("careers/?format=json").then(({ data }) => {
      setUserData(data.results);
      console.log(data.results);
    });
  };

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
          inputLarge
          pHolder={"Content Here"}
        />
        <ButtonS text="Create" />
      </FormContainer>

      <PostsContainer>
        {userData &&
          userData.map((data: any) => (
            <Posts
              title={data.title}
              user={data.username}
              time={data.created_datetime}
              content={data.content}
              key={data.id}
            />
          ))}
      </PostsContainer>
    </HomePage>
  );
};
