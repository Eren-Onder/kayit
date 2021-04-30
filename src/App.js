import React from "react";

import "./App.css";
import Form from "./components/Form.js";
import List from "./components/List";
function App() {
  return (
    <div className="App">
      <Form />
      <List data-testid="liste" />
    </div>
  );
}

export default App;
