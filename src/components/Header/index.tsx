import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { PropsState } from "api/consts";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { actions as actionsProfile } from "reducer/profile";
import { withRouter } from "react-router-dom";

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
