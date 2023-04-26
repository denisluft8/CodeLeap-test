import { ButtonS, InputS } from "..";
import { useState } from "react";
import { deleteSvg, editSvg } from "../../assets";
import {
  ButtonDiv,
  Content,
  DeleteContainer,
  EditContainer,
  FullScreenDelete,
  FullScreenEdit,
  HeaderContainer,
  PostContainer,
  SvgContainer,
  Title,
  User,
} from "./Posts.styles";
import TimeAgo from "react-timeago";
import api from "../../services/api";

interface PostsProps {
  title: string;
  user: string;
  time: string;
  content: string;
  postId: string;
}

export const Posts = ({ title, user, time, content, postId }: PostsProps) => {
  const [isEditShown, setIsEditShown] = useState(false);
  const [isDeleteShown, setIsDeleteShown] = useState(false);
  const [editForm, setEditForm] = useState<{
    title: string;
    content: string;
  }>({
    title: "",
    content: "",
  });

  const openEditModal = () => {
    isEditShown ? setIsEditShown(false) : setIsEditShown(true);
  };

  const openDeleteModal = () => {
    isDeleteShown ? setIsDeleteShown(false) : setIsDeleteShown(true);
  };

  const deletePost = (postId: string) => {
    api.delete(`careers/${postId}/`).then(({ data }) => {
      console.log(data);
    });
    setIsDeleteShown(false);
  };

  const editPost = (postId: string) => {
    api
      .patch(`careers/${postId}/`, editForm)

      .catch((error) => console.log(error));
    setIsEditShown(false);
  };

  return (
    <>
      <PostContainer>
        <HeaderContainer>
          <Title>{title}</Title>
          <SvgContainer>
            <img src={deleteSvg} onClick={() => openDeleteModal()} />
            <img src={editSvg} onClick={() => openEditModal()} />
          </SvgContainer>
        </HeaderContainer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <User>{user}</User>
          <TimeAgo id="timeAgo" date={time} />
        </div>
        <Content>{content}</Content>
      </PostContainer>
      <FullScreenDelete isDeleteDisplayed={isDeleteShown}>
        <DeleteContainer>
          <h2>Are you sure you want to delete this item?</h2>
          <ButtonDiv>
            <ButtonS
              border
              text="Cancel"
              onClick={() => openDeleteModal()}
              bgColor="#fff"
              textColor="#000"
            />
            <ButtonS
              text="Delete"
              bgColor="#FF5151"
              onClick={() => deletePost(postId)}
            />
          </ButtonDiv>
        </DeleteContainer>
      </FullScreenDelete>

      <FullScreenEdit isEditDisplayed={isEditShown}>
        <EditContainer>
          <h2>Edit Item</h2>
          <InputS
            inputId={"Title"}
            onChange={(val: string) => setEditForm({ ...editForm, title: val })}
            pHolder={"Hello World"}
            text={"Title"}
          />
          <InputS
            inputId={"Content"}
            inputLarge
            onChange={(val: string) =>
              setEditForm({ ...editForm, content: val })
            }
            pHolder={"Content Here"}
            text={"Content"}
          />
          <ButtonDiv>
            <ButtonS
              border
              text="Cancel"
              onClick={() => openEditModal()}
              bgColor="#fff"
              textColor="#000"
            />
            <ButtonS text="Save" onClick={() => editPost(postId)} />
          </ButtonDiv>
        </EditContainer>
      </FullScreenEdit>
    </>
  );
};
