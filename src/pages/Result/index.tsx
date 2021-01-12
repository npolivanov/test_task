import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Header from "components/Header";
import MenuComponent from "components/Menu";
import LoremPicsum from "./LoremPicsum";
import PlaceKitten from "./PlaceKitten";
import ScreenShotLayer from "./ScreenShotLayer";

const Result = (props: any) => {
  const returnPage = () => {
    switch (props.match.params.api) {
      case "Lorem Picsum":
        return <LoremPicsum />;
      case "PlaceKitten":
        return <PlaceKitten />;
      case "ScreenShotLayer":
        return <ScreenShotLayer />;
      default:
        return <EmptyMessage>Не найдено</EmptyMessage>;
    }
  };

  return (
    <>
      <Header />
      <MenuComponent />
      {returnPage()}
    </>
  );
};

const EmptyMessage = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #ada3ac;
`;

export default withRouter(Result);
