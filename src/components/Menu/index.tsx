import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Item from "./Item";
import DropMenu from "components/DropMenu";
import { WIDTH_CONTENT, media, links } from "api/consts";

interface Props {
  history: any;
  location: any;
}

const MenuComponent = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <MobileComponents>
        <DropMenu
          handleClick={handleClick}
          handleClose={handleClose}
          links={links}
          anchorEl={anchorEl}
          open={open}
          location={props.location}>
          <MoreVertIcon />
        </DropMenu>
      </MobileComponents>
      <Nav>
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
  width: ${WIDTH_CONTENT};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and ${media.Menu} {
    display: none;
  }
`;

const MobileComponents = styled.div`
  width: ${WIDTH_CONTENT};
  display: flex;
  justify-content: flex-start;
  @media only screen and ${media.Menu} {
    display: flex;
  }
  @media only screen and ${media.MenuModile} {
    display: none;
  }
`;

const Items = styled.div`
  display: flex;
`;

export default withRouter(MenuComponent);
