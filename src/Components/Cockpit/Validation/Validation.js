import React from "react";
import { Wrapper } from "../../Hoc/Wrapper";
import withClass from "../../Hoc/withClass";
import styles from "./Validation.module.css";

const Validation = (props) => {
  const lengthResult =
    props.length >= 5 ? "Text long enough" : "Text too short";

  return <Wrapper>{lengthResult}</Wrapper>;
};

export default withClass(Validation, styles.Validation);
