import React, { useEffect, useState } from "react";
import styled from "styled-components";
import request, { requestCors } from "api/request";

const Breakingbadapi = () => {
  const [characters, setCharacters] = useState<any>(false);
  useEffect(() => {
    requestCors("https://breakingbadapi.com/api/characters").then(
      (res: any) => {
        setCharacters(res);
      }
    );
  }, []);
  return (
    <Wrapper>
      <h1>Персонажи</h1>
      {!characters && <span>Loading...</span>}
      {characters &&
        characters.map((item: any, i: number) => (
          <div key={i}>
            <h2>{item.name}</h2>
            <h4>{item.nickname}</h4>
            <h6>{item.category}</h6>
            <Img src={item.img} />
            <hr />
          </div>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
  margin: auto;
`;

const Img: any = styled.img`
  max-width: 70%;
  margin: auto;
`;

export default Breakingbadapi;
