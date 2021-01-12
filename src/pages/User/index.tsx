import React, { useEffect } from "react";
import Header from "components/Header";
import MenuComponent from "components/Menu";
import Content from "./Content";
import request from "api/request";
import { apiLinks, PropsState } from "api/consts";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions as actionsCards } from "reducer/cards";

// interface IProps {
//   history: any;
//   setCards: (cards: IPropsCards) => void;
//   cards: IPropsCards;
// }

const User = (props: any) => {
  useEffect(() => {
    request(`${apiLinks.url}${apiLinks.Photography}`).then((res: any) => {
      props.setCards(res.entries);
    });
  }, []);
  return (
    <>
      <Header />
      <MenuComponent />
      <Content cards={props.cards} />
    </>
  );
};

const mapStateToProps = (state: PropsState) => {
  return {
    cards: state.cards.cards,
  };
};

const actions = {
  setCards: actionsCards.setCards,
};

export default withRouter(connect(mapStateToProps, actions)(User));
