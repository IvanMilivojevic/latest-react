import React, { Component } from "react";
import styles from "./App.module.css";
import Header from "../Components/Header/Header";
import ThemeContext from "../Components/Context/ThemeContext";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  themeToggleHandler = () => {
    this.setState((prevState) => {
      const theme = prevState.theme === "dark" ? "light" : "dark";

      return { theme };
    });
  };

  render() {
    return (
      <ThemeContext.Provider value={{ theme: this.state.theme, setTheme: this.themeToggleHandler }}>
        <div className={styles.App}>
          <Header />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
