import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  link: String;
  active: boolean | undefined;
  children: React.ReactNode;
}

const Item = (props: Props) => {
  return (
    <Wrapper
      to={props.link}
      style={{ textDecoration: "none" }}
      active={props.active}>
      <Title active={props.active}>{props.children}</Title>
    </Wrapper>
  );
};

const Wrapper: any = styled(Link)`
  width: 80px;

  height: 6vh;
  display: flex;
  margin-left: 30px;
  align-items: "center";
  text-align: center;
  border-bottom: ${(props: any) =>
    props.active ? "3px solid #ff4976" : "none"};
  box-shadow: ${(props: any) =>
    props.active
      ? "3px -60px 31px -71px rgba(255, 73, 118, 0.2) inset"
      : "none"};
`;

const Title: any = styled.span`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props: any) => (props.active ? "#ff4976" : "#8ca3ac")};
  font-weight: ${(props: any) => (props.active ? "bold" : "normal")};
  text-shadow: ${(props: any) =>
    props.active ? "1px 1px 1px#ff4976" : "none"};
  font-size: 20px;
`;

export default Item;
