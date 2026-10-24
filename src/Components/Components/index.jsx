import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import Greeting from "../Greeting";
import Goodbye from "../Goodbye";
import styles from "./Components.module.sass";

function Components() {
  const { path, url } = useRouteMatch();
  return (
    <div className={styles.compContainer}>
      Components
      <ul className={styles.linkCont}>
        <li>
          <Link className={styles.links} to={`${url}/greeting`}>
            Greeting
          </Link>
        </li>
        <li>
          <Link className={styles.links} to={`${url}/goodbye`}>
            Goodbye
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/greeting`}>
          <Greeting />
        </Route>
        <Route path={`${path}/goodbye`}>
          <Goodbye />
        </Route>
      </Switch>
    </div>
  );
}

export default Components;
