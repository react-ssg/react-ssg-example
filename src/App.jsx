import React from "react";
import { Switch, Link, Route } from "react-router-dom";

export const App = () => {
  return (
    <Switch>
      <Route path="/about/">
        <div>
          <h1>Hello worrld!</h1>
        </div>
      </Route>
      <Route path="/" exact>
        <div>
          <h1>index</h1>
          <Link to="/about/">go to about</Link>
        </div>
      </Route>
      <Route path="*">
        Not Found
      </Route>
    </Switch>
  );
};
