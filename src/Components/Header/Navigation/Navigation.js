import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.Nav}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/posts">Posts</a>
      </li>
      <li>
        <a href="/featured">Featured</a>
      </li>
    </ul>
  );
};

export default Navigation;
