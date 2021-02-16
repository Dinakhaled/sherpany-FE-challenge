import React, { Suspense } from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import history from "./History";
// ========= pages =========
import Users from "../pages/users";
import Settings from "../pages/settings";

const Routes = (
  <Suspense fallback={"loading..."}>
    <Router history={history}>
      <Switch>
        <Users path="/" exact />
        <Settings path="/settings" />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;
