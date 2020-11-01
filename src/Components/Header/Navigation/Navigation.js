import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.Nav}>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/posts">Posts</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
