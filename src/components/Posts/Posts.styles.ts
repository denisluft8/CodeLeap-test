import styled from "styled-components";

export const PostContainer = styled.div`
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  border-top: none;
  margin-bottom: 20px;

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
