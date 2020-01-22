import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import App from "./App"
import Blogs from "./Containers/Blogs/Blogs"

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();


const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Blogs} /> 
      </Switch>
    </Router>
  );
};
export default Routes;
