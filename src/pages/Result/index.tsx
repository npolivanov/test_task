import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Header from "components/Header";
import MenuComponent from "components/Menu";
import LoremPicsum from "./LoremPicsum";
import PlaceKitten from "./PlaceKitten";
import ScreenShotLayer from "./ScreenShotLayer";
import ChurchCalendar from "./ChurchCalendar";
import CzechNamedaysCalendar from "./CzechNamedaysCalendar";
import HebrewCalendar from "./HebrewCalendar";
import LectServe from "./LectServe";
import NamedaysCalendar from "./NamedaysCalendar";

const Result = (props: any) => {
  const returnPage = () => {
    switch (props.match.params.api) {
      case "Lorem Picsum":
        return <LoremPicsum />;
      case "PlaceKitten":
        return <PlaceKitten />;
      case "ScreenShotLayer":
        return <ScreenShotLayer />;
      case "Church Calendar":
        return <ChurchCalendar />;
      case "Czech Namedays Calendar":
        return <CzechNamedaysCalendar />;
      case "Hebrew Calendar":
        return <HebrewCalendar />;
      case "LectServe":
        return <LectServe />;
      case "Namedays Calendar":
        return <NamedaysCalendar />;
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
