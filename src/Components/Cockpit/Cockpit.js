import React from "react";
import styles from "./Cockpit.module.css";
import Validation from "./Validation/Validation";
import Box from "../Hoc/Box";

const Cockpit = (props) => {
  return (
    <Box component="span">
      <input
        type="text"
        onChange={props.change}
        value={props.letters.join("")}
      />
      <div className={styles.Test}>
        <p className={props.letters.length > 4 ? styles.Active : null}>
          {props.letters.length}
        </p>
      </div>
      <Validation length={props.letters.length} />
    </Box>
  );
};

export default Cockpit;
