import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-browser-router";
import "./App.css";
import Form from "./components/Form.js";
import List from "./components/List";
import Person from "./components/person";
function App() {
  const [loaded, setLoaded] = useState(false);
  function callback() {
    setLoaded(true);
  }
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <link to="/Form">FORM</link>
          </li>
          <li>
            <link to="/List">LİST</link>
          </li>
          <li>
            <link to="/person">PERSON</link>
          </li>
        </ul>
        <div className="App">
          <Route path="/Form">
            <Form data-testid="fromapp" call={callback} />
          </Route>
          <Route path="/List">
            <List data-testid="liste" load={loaded} />
          </Route>
          <Route path="/person">
            <Person data-testid="persons" load={loaded} />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
