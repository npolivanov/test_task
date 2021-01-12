import React, { useEffect, useState } from "react";
import Header from "components/Header";
import MenuComponent from "components/Menu";
import Content from "./Content";
import request from "api/request";
import { apiLinks, PropsState } from "api/consts";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions as actionsCards } from "reducer/cards";
import { actions as actionsUsers } from "reducer/users";
import { category } from "api/consts";
// interface IProps {
//   history: any;
//   setCards: (cards: IPropsCards) => void;
//   cards: IPropsCards;
// }

const User = (props: any) => {
  const [nameCategory, setNameCategory] = useState("Photo");
  const changeCategory = () => {
    if (props.category === null || props.category >= category.length - 1) {
      props.selectCategory(0);
    } else {
      props.selectCategory(props.category + 1);
    }
  };
  useEffect(() => {
    changeCategory();
  }, []);

  useEffect(() => {
    changeCategory();
  }, [props.match.params.id]);

  useEffect(() => {
    if (props.category !== undefined) {
      let select = category[props.category];
      if (select !== undefined) {
        setNameCategory(select.name);
        request(select.link).then((res: any) => {
          props.setCards(res.entries);
        });
      }
    }
  }, [props.category]);

  return (
    <>
      <Header />
      <MenuComponent />
      <Content cards={props.cards} category={nameCategory} />
    </>
  );
};

const mapStateToProps = (state: PropsState) => {
  return {
    cards: state.cards.cards,
    category: state.users.category,
  };
};

const actions = {
  setCards: actionsCards.setCards,
  selectCategory: actionsUsers.selectCategory,
};

export default withRouter(connect(mapStateToProps, actions)(User));
