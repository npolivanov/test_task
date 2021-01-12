import React, { useEffect } from "react";
import styled from "styled-components";
import request from "api/request";
import { WIDTH_CONTENT } from "api/consts";

const ScreenShotLayer = () => {
  const url = "http://api.screenshotlayer.com";
  const params = "/api/capture?access_key=";
  const key = "a6383dad67882efc8254f00b23a925db";
  return (
    <Wrapper>
      <Content>
        <Image
          src={`${url}${params}${key}&url=http://google.com&viewport=1440x900&width=250`}
        />
        <Image
          src={`${url}${params}${key}&url=https://reactjs.org&viewport=1440x900&width=250`}
        />
        <Image
          src={`${url}${params}${key}&url=https://www.npmjs.com&viewport=1440x900&width=250`}
        />
        <Image
          src={`${url}${params}${key}&url=https://yandex.ru&viewport=1440x900&width=250`}
        />
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

export default ScreenShotLayer;
