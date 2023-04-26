import { ButtonS, InputS } from "..";
import { deleteSvg, editSvg } from "../../assets";
import {
  ButtonDiv,
  Content,
  DeleteContainer,
  EditContainer,
  HeaderContainer,
  PostContainer,
  SvgContainer,
  Title,
  User,
} from "./Posts.styles";
import TimeAgo from "react-timeago";

interface PostsProps {
  title: string;
  user: string;
  time: string;
  content: string;
}

export const Posts = ({ title, user, time, content }: PostsProps) => {
  return (
    <>
      <PostContainer>
        <HeaderContainer>
          <Title>{title}</Title>
          <SvgContainer>
            <img src={deleteSvg} />
            <img src={editSvg} />
          </SvgContainer>
        </HeaderContainer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <User>{user}</User>
          <TimeAgo id="timeAgo" date={time} />
        </div>
        <Content>{content}</Content>
      </PostContainer>

      <DeleteContainer>
        <h2>Are you sure you want to delete this item?</h2>
        <ButtonDiv>
          <ButtonS
            border
            text="Cancel"
            onClick={(e) => console.log("edit")}
            bgColor="#fff"
            textColor="#000"
          />
          <ButtonS
            text="Delete"
            bgColor="#FF5151"
            onClick={(e) => console.log("edit")}
          />
        </ButtonDiv>
      </DeleteContainer>

      <EditContainer isDisplayed>
        <h2>Edit Item</h2>
        <InputS
          inputId={"Title"}
          onChange={function (val: string): void {
            throw new Error("Function not implemented.");
          }}
          pHolder={"Hello World"}
          text={"Title"}
        />
        <InputS
          inputId={"Content"}
          onChange={function (val: string): void {
            throw new Error("Function not implemented.");
          }}
          pHolder={"Content Here"}
          text={"Content"}
        />
        <ButtonDiv>
          <ButtonS
            border
            text="Cancel"
            onClick={(e) => console.log("edit")}
            bgColor="#fff"
            textColor="#000"
          />
          <ButtonS text="Save" onClick={(e) => console.log("edit")} />
        </ButtonDiv>
      </EditContainer>
    </>
  );
};
