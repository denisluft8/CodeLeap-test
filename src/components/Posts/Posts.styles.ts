import styled from "styled-components";

export const PostContainer = styled.div`
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  border-top: none;
  margin-bottom: 20px;
  width: 100%;

  #timeAgo {
    height: 18px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #777777;
    padding: 20px;
  }
`;

export const HeaderContainer = styled.div`
  background: #7695ec;
  border-radius: 16px 16px 0px 0px;
  margin: -1px -1px -1px -1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const SvgContainer = styled.div`
  min-width: fit-content;
  & > img {
    cursor: pointer;
    margin-left: 8px;

    &:hover {
      filter: opacity(80%);
    }
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  color: #ffffff;
`;

export const User = styled.h3`
  padding: 20px;
  height: 18px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #777777;
  float: left;
`;

export const Content = styled.p`
  padding: 20px;
  min-height: 100px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;
interface EditStyleProps {
  isEditDisplayed: boolean;
}

export const EditContainer = styled.div`
  border: 1px solid #999999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  margin: 20px;
  padding: 20px;
  box-sizing: border-box;
  max-width: 80%;
  min-height: 334px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  position: fixed;
  width: 100%;
  z-index: 999;

  & > h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
  }
`;

interface DeleteStyleProps {
  isDeleteDisplayed: boolean;
}
export const DeleteContainer = styled.div`
  border: 1px solid #999999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  margin: 20px;
  padding: 20px;
  box-sizing: border-box;
  width: 70%;
  max-height: 146px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  position: fixed;
  z-index: 999;

  & > h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
  }
`;

export const ButtonDiv = styled.div`
  text-align: end;
`;

export const FullScreenDelete = styled.div<DeleteStyleProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: #8b8b8bd9;
  display: ${(props) => (props.isDeleteDisplayed ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
export const FullScreenEdit = styled.div<EditStyleProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #8b8b8bd9;
  display: ${(props) => (props.isEditDisplayed ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
