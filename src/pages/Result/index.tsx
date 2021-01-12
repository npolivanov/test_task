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
import Breakingbadapi from "./Breakingbadapi";
import FinalSpace from "./FinalSpace";
import RonSwansonQuotes from "./RonSwansonQuotes";
import TheLordoftheRings from "./TheLordoftheRings";
import STAPI from "./STAPI";

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
      case "Breaking Bad":
        return <Breakingbadapi />;
      case "Final Space":
        return <FinalSpace />;
      case "Ron Swanson Quotes":
        return <RonSwansonQuotes />;
      case "STAPI":
        return <STAPI />;
      case "The Lord of the Rings":
        return <TheLordoftheRings />;
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
