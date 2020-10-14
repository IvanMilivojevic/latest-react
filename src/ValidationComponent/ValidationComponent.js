import React from "react";

const ValidationComponent = (props) => {
  const lengthResult = props.length >= 5 ? "Text long enough" : "Text too short";

  return <div>{lengthResult}</div>;
};

export default ValidationComponent;
