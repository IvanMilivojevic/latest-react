import React, { Component } from "react";
import PropTypes from "prop-types";
import ThemeContext from "../../Context/ThemeContext";

class Char extends Component {
  inputRef = React.createRef();

  componentDidMount() {
    console.log(this.inputRef.current);
  }

  render() {
    const style = {
      display: "inline-block",
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      border: "1px solid black",
      backgroundColor: "red",
      color: "white",
    };

    style.backgroundColor = this.context.theme === "light" ? "red" : "black";

    return (
      <span
        style={style}
        onClick={this.props.click}
        onKeyDown={this.props.click}
        ref={this.inputRef}
        role="button"
        tabIndex="0"
      >
        {this.props.letter}
      </span>
    );
  }
}
Char.contextType = ThemeContext;

Char.propTypes = {
  click: PropTypes.func.isRequired,
  letter: PropTypes.string,
};

export default Char;
