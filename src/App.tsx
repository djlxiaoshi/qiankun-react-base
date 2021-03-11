import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/reactApp">React App</Link>
            </li>
            <li>
              <Link to="/vueApp">Vue App</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <h1>about</h1>
          </Route>
        </Switch>

        <div id="reactApp"></div>
        <div id="vueApp"></div>
      </div>
    </Router>
  );
}

export default App;
