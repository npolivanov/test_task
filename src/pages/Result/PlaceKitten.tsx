import React, { useEffect } from "react";
import styled from "styled-components";
import request from "api/request";
import { WIDTH_CONTENT } from "api/consts";

const PlaceKitten = () => {
  return (
    <Wrapper>
      <Content>
        <Image src={"https://placekitten.com/200/300?image=1"} />
        <Image src={"https://placekitten.com/200/300?image=2"} />
        <Image src={"https://placekitten.com/200/300?image=3"} />
        <Image src={"https://placekitten.com/200/300?image=4"} />
        <Image src={"https://placekitten.com/200/300?image=5"} />
        <Image src={"https://placekitten.com/200/300?image=6"} />
        <Image src={"https://placekitten.com/200/300?image=7"} />
        <Image src={"https://placekitten.com/200/300?image=8"} />
        <Image src={"https://placekitten.com/200/300?image=9"} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Content = styled.div`
  width: ${WIDTH_CONTENT};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Image = styled.img`
  padding: 30px;
  box-sizing: border-box;
`;

export default PlaceKitten;
