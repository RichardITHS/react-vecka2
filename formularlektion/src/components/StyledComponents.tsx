import React, { useState } from "react";
import styled from "styled-components";
//  behövs också att vi installerar "npm i --save-dev @types/styled-components" för att det är typescript tror jag
// import { useRef } from "react";

const testFunktion = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.clientX);
};

const Wrap = styled.div`
  background-color: black;
  color: white;
  width: 50%;
  display: flex;
  margin: auto;
  text-align: center;
`;
const ButtonLeft = styled.button`
  border: solid 3px black;
  padding: 10px;
  margin-top: 5px;
  background-color: antiquewhite;
`;

const StyledComponents = () => {
  const [btnStyle, setBtnStyle] = useState(false);
  const changeStyleFunction = () => {
    setBtnStyle((booleanValue) => !booleanValue);
  };

  const ButtonRight = styled(ButtonLeft)`
    /* background-color: #d14d19; */
    background-color: ${btnStyle ? "#d18119" : "#19d147"};
    margin-left: 10px;
  `;

  return (
    <div>
      <Wrap>
        <h1>StyledComponents</h1>
      </Wrap>
      <ButtonLeft onClick={changeStyleFunction}>klick klick</ButtonLeft>
      <ButtonRight onMouseOver={(e) => testFunktion(e)}>
        kolla annorlunda
      </ButtonRight>
    </div>
  );
};

export default StyledComponents;
