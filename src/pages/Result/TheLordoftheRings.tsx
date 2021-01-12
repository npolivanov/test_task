import React, { useEffect, useState } from "react";
import styled from "styled-components";
import request from "api/request";

const TheLordoftheRings = () => {
  const [items, setItems] = useState<any>(false);
  useEffect(() => {
    request("https://the-one-api.dev/v2/book/").then((res: any) => {
      setItems(res);
    });
  }, []);
  return (
    <Wrapper>
      {!items && "Loading..."}
      {items &&
        items.docs.map((value: any) => (
          <>
            <h1>{value.name}</h1>
          </>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
  margin: auto;
`;

export default TheLordoftheRings;
