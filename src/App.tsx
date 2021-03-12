import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./index.module.scss";
import MenuBar from "./Menu";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.left}>
          <MenuBar></MenuBar>
        </div>
        <div className={styles.right}>
          <Switch>
            <Route path="/about">
              <h1>about</h1>
            </Route>
          </Switch>

          <div id="reactApp"></div>
          <div id="vueApp"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
