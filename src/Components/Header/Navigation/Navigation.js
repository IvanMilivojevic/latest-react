import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.Nav}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/featured">Featured</Link>
      </li>
    </ul>
  );
};

export default Navigation;
