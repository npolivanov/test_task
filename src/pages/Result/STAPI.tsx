import React, { useEffect, useState } from "react";
import styled from "styled-components";
import request from "api/request";

const STAPI = () => {
  const [items, setItems] = useState<any>(false);
  useEffect(() => {
    request("http://stapi.co/api/v1/rest/season/search").then((res: any) => {
      setItems(res.seasons);
    });
  }, []);
  return (
    <Wrapper>
      {!items && "Loading..."}
      {items &&
        items.map((value: any) => (
          <>
            <h3>{value.title}</h3>
            <h4>{value.series.title}</h4>
            <hr />
          </>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
  margin: auto;
`;

export default STAPI;
