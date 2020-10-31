import React, { Component } from "react";
import styles from "./App.module.css";
import Cockpit from "../Components/Cockpit/Cockpit";
import CharacterList from "../Components/CharacterList/CharacterList";
import PostsList from "./PostsList/PostsList";
import Header from "../Components/Header/Header";
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
        <Header />
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
