import React from "react";
import styled from "styled-components";
import { WIDTH_CONTENT, IPropsCards } from "api/consts";
import CardComponent from "components/CardComponent";
import MonochromePhotosIcon from "@material-ui/icons/MonochromePhotos";
import DateRangeIcon from "@material-ui/icons/DateRange";
interface IProps {
  cards: Array<IPropsCards>;
  category: String;
}

const returnIcon = (category: String) => {
  switch (category) {
    case "Photo":
      return <MonochromePhotosIcon color={"primary"} fontSize={"large"} />;
    case "Calendar":
      return <DateRangeIcon color={"primary"} fontSize={"large"} />;
    default:
      return "";
  }
};
const Content = (props: IProps) => {
  return (
    <Wrapper>
      <WrapperCards>
        {props.cards.map((item, i) => (
          <CardComponent card={item} key={i}>
            {returnIcon(props.category)}
          </CardComponent>
        ))}
      </WrapperCards>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${WIDTH_CONTENT};
  margin: 20px auto;
`;

const WrapperCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Content;
