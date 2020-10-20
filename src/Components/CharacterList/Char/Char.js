import React, { useEffect } from "react";

const Char = (props) => {
  useEffect(() => {
    console.log("char render");
    return () => {
      console.log("char unmounted");
    };
  }, []);

  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
    backgroundColor: "red",
    color: "white",
  };

  return (
    <span style={style} onClick={props.click}>
      {props.letter}
    </span>
  );
};

export default Char;
