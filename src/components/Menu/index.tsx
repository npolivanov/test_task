import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Item from "./Item";

interface Props {
  history: any;
  location: any;
}

const Menu = (props: Props) => {
  const links = [
    {
      title: "add",
      link: "/",
    },
    {
      title: "user",
      link: "/user",
    },
    {
      title: "view",
      link: "/view",
    },
  ];
  return (
    <Wrapper>
      <Nav>
        <Typography variant="h4" component="h2">
          Add user
        </Typography>
        <Items>
          {links.map((item, i) => (
            <Item
              key={i}
              link={item.link}
              active={props.location.pathname === item.link}>
              {item.title}
            </Item>
          ))}
        </Items>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 6vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Items = styled.div`
  display: flex;
`;

export default withRouter(Menu);
