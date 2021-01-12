import React, { useEffect, useState } from "react";
import styled from "styled-components";
import request, { requestCors } from "api/request";

const BreakingBadQuotes = () => {
  const [characters, setCharacters] = useState<any>(false);
  useEffect(() => {
    requestCors("https://finalspaceapi.com/api/v0/character").then(
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
            <h4>Gander: {item.gender}</h4>
            <h6>hair: {item.hair}</h6>
            <h6>species: {item.species}</h6>
            <Img src={item.img_url} />
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

export default BreakingBadQuotes;
