import React from "react";

const Box = (props) =>
  React.createElement(
    props.component || "div",
    { className: "test", id: "test" },
    props.children
  );

export default Box;
