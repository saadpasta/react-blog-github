import React from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import App from "./App"
import Blogs from "./Containers/Blogs/Blogs"
import BlogHome from "./Containers/BlogPost/BlogPost";

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();


const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Blogs} /> 
        <Route exact path="/blog/:title/:issueNumber" component={BlogHome}/>
      </Switch>
    </Router>
  );
};
export default Routes;
