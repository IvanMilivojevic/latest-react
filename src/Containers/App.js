import React, { Component } from "react";
import styles from "./App.module.css";
import Cockpit from "../Components/Cockpit/Cockpit";
import CharacterList from "../Components/CharacterList/CharacterList";
import PostsList from "../Components/PostsList/PostsList";
import ThemeContext from "../Components/Context/ThemeContext";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: [],
      theme: "light",
    };
  }

  componentDidMount() {
    console.log("app mounted");
  }

  shouldComponentUpdate() {
    console.log("app should");
    return true;
  }

  componentDidUpdate() {
    console.log("app updated");
  }

  lettersHandler = (event) => {
    console.log("app handle");
    this.setState({
      letters: event.target.value.split(""),
    });
  };

  removeLetter = (index) => {
    this.setState((prevState) => {
      const letters = [...prevState.letters];
      letters.splice(index, 1);

      return { letters };
    });
  };

  themeToggleHandler = () => {
    this.setState((prevState) => {
      const theme = prevState.theme === "dark" ? "light" : "dark";

      return { theme };
    });
  };

  render() {
    console.log("app render");

    return (
      <div className={`${styles.App} ${this.state.letters.length > 4 ? "dark" : ""}`}>
        {/* <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p> */}

        <ThemeContext.Provider value={{ theme: this.state.theme, setTheme: this.themeToggleHandler }}>
          <Cockpit change={this.lettersHandler} letters={this.state.letters} />
          {this.state.letters.length ? (
            <CharacterList letters={this.state.letters} clicked={this.removeLetter} />
          ) : null}
        </ThemeContext.Provider>
        <PostsList />
      </div>
    );
  }
}

export default App;
