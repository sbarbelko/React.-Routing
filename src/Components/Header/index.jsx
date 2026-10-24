import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.sass";
function Header() {
  return (
    <nav>
      <ul className={styles.headerUl}>
        <li>
          <NavLink
            to="/home"
            className={styles.headerLink}
            activeClassName={styles.active}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/components"
            className={styles.headerLink}
            activeClassName={styles.active}
          >
            Components
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={styles.headerLink}
            activeClassName={styles.active}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
