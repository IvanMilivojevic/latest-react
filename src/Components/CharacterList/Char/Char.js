import React, { Component } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

class Char extends Component {
  state = {
    number: 0,
  };

  // useEffect(() => {
  //   console.log("char render");
  //   return () => {
  //     console.log("char unmounted");
  //   };
  // }, []);

  // constructor(props) {
  //   super(props);
  // }

  inputRef = React.createRef();

  componentDidMount() {
    console.log(this.inputRef.current, this.state);
  }

  static contextType = ThemeContext;

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
      <span style={style} onClick={this.props.click} ref={this.inputRef}>
        {this.props.letter}
      </span>
    );
  }
}

export default Char;
