import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  DashboardScreen,
  LoginScreen,
  Dashboard2Screen,
  BaseScreen,
  CustomerListScreen,
  CustomerDetailScreen,
  AccountListScreen,
} from "../screens/index";

import Menu from "../components/Menu";
import Header from "components/Header";
import { ROUTER } from "../constants/Constant";
import PrivateRoute from "./PrivateRoute";

class AppNavigator extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={"/login"} exact component={LoginScreen} />
          <PrivateRoute path="/" Component={MainNavigator} />
        </Switch>
      </Router>
    );
  }
}

class MainNavigator extends Component {
  render() {
    return (
      <>
        <Header />
        <Menu />
        {/* <Route path='/overview' exact component={DashboardScreen} /> */}
        <Switch>
          <Route path="/overview" exact component={DashboardScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/base" exact component={BaseScreen} />
          <Route path="/customer" exact component={CustomerListScreen} />
          <Route path="/account" exact component={AccountListScreen} />
          <Route
            path="/customer-detail"
            exact
            component={CustomerDetailScreen}
          />
          <Route render={() => <Redirect to={"login"} />} />
        </Switch>
      </>
    );
  }
}

export default AppNavigator;
