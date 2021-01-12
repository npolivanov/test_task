import React from "react";
import styled from "styled-components";
import { WIDTH_CONTENT, IPropsCards } from "api/consts";
import CardComponent from "components/CardComponent";
interface IProps {
  cards: Array<IPropsCards>;
}

const Content = (props: IProps) => {
  return (
    <Wrapper>
      <WrapperCards>
        {props.cards.map((item, i) => (
          <CardComponent card={item} key={i} />
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
