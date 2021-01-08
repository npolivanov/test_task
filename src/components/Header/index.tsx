import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { PropsState } from "api/consts";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { actions as actionsProfile } from "reducer/profile";
import { withRouter } from "react-router-dom";
import DropMenu from "components/DropMenu";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
interface Props {
  login?: String;
  token: String;
  setLogin: (login: String) => void;
  history: any;
}

const useStyles = makeStyles({
  custom: {
    color: "white",
    fontWeight: "bold",
  },
});

const Header = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  const logOut = () => {
    localStorage.setItem("login", "");
    localStorage.setItem("token", "");
    props.setLogin("");
    props.history.push("/auth");
  };
  return (
    <HeaderComponents>
      <HeaderContent>
        <Profile>
          {props.token && props.login && (
            <Button onClick={logOut} className={classes.custom}>
              {props.login}
              <ExitToAppIcon fontSize="small" />
            </Button>
          )}
        </Profile>
        <DropMenu
          handleClick={handleClick}
          handleClose={handleClose}
          links={links}
          anchorEl={anchorEl}
          open={open}
          location={123}>
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon style={{ color: "#fff" }} />
          </Badge>
        </DropMenu>
      </HeaderContent>
    </HeaderComponents>
  );
};

const HeaderComponents = styled.div`
  background-color: #2a3244;
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: center;
`;

const HeaderContent = styled.div`
  width: 70%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Profile = styled.div`
  display: "flex";
  flex-direction: "column";
`;

const mapStateToProps = (state: PropsState) => {
  return {
    login: state.profile.login,
    token: state.profile.token,
  };
};

const actions = {
  setLogin: actionsProfile.setLogin,
};

export default withRouter(connect(mapStateToProps, actions)(Header));
