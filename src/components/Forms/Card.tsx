import React from "react";
import styled from "styled-components";
import { media } from "api/consts";

interface Props {
  children: React.ReactNode;
  title: String;
}

const Card = (props: Props) => {
  const returnTitle = (title: String) => {
    if (title.length > 18) {
      return `${title.substr(0, 18)}...`;
    } else {
      return title;
    }
  };
  return (
    <Wrapper>
      <Title title={props.title.toString()}>{returnTitle(props.title)}</Title>
      <Content>{props.children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 10vh;
  background-color: #fff;
  box-shadow: 0px 10px 15px -14px #5e5959;
  position: relative;
  @media only screen and ${media.CardForm} {
    margin-top: 0vh;
    box-shadow: none;
    bottom: 0px;
    height: 94vh;
  }
`;

const Content = styled.div`
  padding: 15px;
`;

const Title = styled.h1`
  color: #ff4976;
  text-align: center;
  padding: 10px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ff4976;
`;

export default Card;
