import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import { media } from "api/consts";

interface ObjectProps {
  title: String;
  link: String;
}

interface Props {
  handleClick: (event: any) => void;
  handleClose: () => void;
  links: Array<ObjectProps>;
  location: any;
  open: boolean;
  anchorEl: any;
  widthItem?: String;
  heigthItem?: number;
  children: React.ReactNode;
}
const ITEM_HEIGHT: number = 48;

const DropMenu = (props: Props) => {
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={props.handleClick}>
        {props.children}
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={props.anchorEl}
        keepMounted
        open={props.open}
        onClose={props.handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}>
        {props.links.map((item, i) => (
          <MenuItem
            key={i}
            selected={props.location.pathname === item.link}
            onClick={props.handleClose}>
            <Link
              to={item.link}
              key={i}
              style={{ textDecoration: "none", color: "#000" }}>
              {item.title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DropMenu;
