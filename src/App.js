import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
import { StyledP } from "./CustomStyles";

class App extends Component {
  state = {
    letters: [],
  };

  lettersHandler = (event) => {
    this.setState({
      letters: event.target.value.split(""),
    });
  };

  removeLetter = (index) => {
    const letters = [...this.state.letters];
    letters.splice(index, 1);

    this.setState({
      letters: letters,
    });
  };

  render() {
    const chars = this.state.letters.map((letter, index) => {
      return (
        <CharComponent
          letter={letter}
          click={() => this.removeLetter(index)}
          key={index}
          length={this.state.letters.length}
        />
      );
    });

    return (
      <div className="App">
        {/* <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p> */}

        <input
          type="text"
          onChange={this.lettersHandler}
          value={this.state.letters.join("")}
        />
        <StyledP style={{ color: "black" }} length={this.state.letters.length}>
          {this.state.letters.length}
        </StyledP>

        <ValidationComponent length={this.state.letters.length} />
        <div className="letters-wrapper">{chars}</div>
      </div>
    );
  }
}

export default App;
