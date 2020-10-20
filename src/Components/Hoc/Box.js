import React from "react";

const Box = (props) =>
  React.createElement(
    props.component || "div",
    { class: "test", id: "test" },
    props.children
  );

export default Box;
