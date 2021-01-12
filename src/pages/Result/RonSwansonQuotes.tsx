import React, { useEffect, useState } from "react";
import styled from "styled-components";
import request, { requestCors } from "api/request";

const RonSwansonQuotes = () => {
  const [items, setItems] = useState<any>(false);
  useEffect(() => {
    request("https://ron-swanson-quotes.herokuapp.com/v2/quotes/30").then(
      (res: Array<String>) => {
        setItems(res);
      }
    );
  }, []);
  return (
    <Wrapper>
      <ol>
        {!items && "Loading..."}
        {items &&
          items.map((value: String) => (
            <li>
              <h3>{value}</h3>
            </li>
          ))}
      </ol>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
  margin: auto;
`;

export default RonSwansonQuotes;
