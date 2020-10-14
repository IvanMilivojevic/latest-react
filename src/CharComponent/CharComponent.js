import React from "react";
import { StyledChar, StyledP } from "./../CustomStyles";

const CharComponent = (props) => {
  return (
    <StyledP>
      <StyledChar onClick={props.click} length={props.length}>
        {props.letter}
      </StyledChar>
    </StyledP>
  );
};

export default CharComponent;
