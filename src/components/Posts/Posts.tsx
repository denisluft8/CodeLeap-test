import { deleteSvg, editSvg } from "../../assets";
import {
  Content,
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
  );
};
