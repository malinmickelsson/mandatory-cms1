import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Main from "./components/Main.js";
import Article from "./components/Article.js";
import Author from "./components/Author.js";

const App = () => {
  const [results, setResult] = useState([]);
  useEffect(() => {
    axios
      .get("http://192.168.99.102:8080/api/collections/get/Article")
      .then(res => {
        console.log(res.data.entries);

        setResult(res.data.entries);
      })
      .catch(function(error) {
        console.log("Error fetching the api");
      });
  }, []);

  console.log("logging results: ");
  console.log(results);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Main results={results} />} />
        <Route path="/Article" render={() => <Article results={results} />} />
        <Route path="/Author" render={() => <Author results={results} />} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
