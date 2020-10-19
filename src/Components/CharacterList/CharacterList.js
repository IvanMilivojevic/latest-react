import React, { Component } from "react";
import Char from "./Char/Char";
import styles from "./CharacterList.module.css";

class CharacterList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("list should");
    return true;
  }

  componentDidMount() {
    console.log("list mounted");
  }

  componentDidUpdate() {
    console.log("list updated");
  }

  componentWillUnmount() {
    console.log("list unmounted");
  }

  render() {
    console.log("list render");

    return (
      <div className={styles.LettersWrapper}>
        {this.props.letters.map((letter, index) => (
          <Char
            letter={letter}
            click={() => this.props.clicked(index)}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default CharacterList;
