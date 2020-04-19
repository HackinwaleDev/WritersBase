import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for Writer Base
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
// below pages not yet implemented
import SignupPage from "views/SignupPage/SignupPage";
import SubscriptionPage from "views/SubscriptionPage/SubscriptionPage";
import PaymentPage from "views/PaymentPage/PaymentPage";
import WriterDashboard from "views/Writer/WriterDashboard"
import ReaderDashboard from "views/Reader/ReaderDashboard"
import AdminDashboard from "views/Admin/AdminDashboard"


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
