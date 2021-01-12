import React, { useEffect } from "react";
import styled from "styled-components";
import request from "api/request";
import { WIDTH_CONTENT } from "api/consts";

const LoremPicsum = () => {
  return (
    <Wrapper>
      <Content>
        <Image src={"https://picsum.photos/200/300?random=1"} />
        <Image src={"https://picsum.photos/200/300?random=2"} />
        <Image src={"https://picsum.photos/200/300?random=3"} />
        <Image src={"https://picsum.photos/200/300?random=4"} />
        <Image src={"https://picsum.photos/200/300?random=5"} />
        <Image src={"https://picsum.photos/200/300?random=6"} />
        <Image src={"https://picsum.photos/200/300?random=7"} />
        <Image src={"https://picsum.photos/200/300?random=8"} />
        <Image src={"https://picsum.photos/200/300?random=9"} />
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

export default LoremPicsum;
