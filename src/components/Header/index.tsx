import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderComponents>
      <HeaderContent></HeaderContent>
    </HeaderComponents>
  );
};

const HeaderComponents = styled.div`
  background-color: #2a3244;
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: center;
`;

const HeaderContent = styled.div`
  width: 70%;
  color: white;
`;

export default Header;
