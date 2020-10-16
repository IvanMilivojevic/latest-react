import React from "react";
import Char from "./Char/Char";
import styles from "./CharacterList.module.css";

const CharacterList = (props) => {
  return (
    <div className={styles.LettersWrapper}>
      {props.letters.map((letter, index) => (
        <Char letter={letter} click={() => props.clicked(index)} key={index} />
      ))}
    </div>
  );
};

export default CharacterList;
