import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./components/Main.js";
import Article from "./components/Article.js";
import Author from "./components/Author.js";

const App = () => {
  

  return (
    <Router>
      <Switch>
	  	<Route exact path="/" component={Main} />
        <Route path="/Article/:id" component={Article} />
        <Route path="/Athour" component={Author} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
