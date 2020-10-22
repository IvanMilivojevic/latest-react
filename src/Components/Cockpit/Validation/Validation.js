import React from "react";
import { Wrapper } from "../../Hoc/Wrapper";
import withClass from "../../Hoc/withClass";
import styles from "./Validation.module.css";
import { ThemeContext } from "../../Context/ThemeContext";

const Validation = (props) => {
  const lengthResult =
    props.length >= 5 ? "Text long enough" : "Text too short";

  return (
    <ThemeContext.Consumer>
      {(context) => {
        return (
          <Wrapper>
            {lengthResult}
            <button style={{marginLeft: "10px"}} onClick={context.setTheme}>Toggle Theme</button>
          </Wrapper>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default withClass(Validation, styles.Validation);
