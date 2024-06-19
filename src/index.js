/*!

=========================================================
* Paper Kit PRO React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-pro-react
* Copyright 2022 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages
import LoginPage from "views/examples/LoginPage.js";
import Presentation from "views/Presentation.js";
// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      
      <Route
        path="/presentation"
        render={(props) => <Presentation {...props} />}
      />
      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      <Redirect to="/presentation" />
    </Switch>
  </BrowserRouter>
);
