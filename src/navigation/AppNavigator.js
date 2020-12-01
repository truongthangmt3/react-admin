import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { DashboardScreen, LoginScreen } from '../screens/index';
import Menu from '../components/Menu';
import Header from '@components/Header';
import { ROUTER } from '../constants/Constant';
import PrivateRoute from './PrivateRoute';

class AppNavigator extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path={ROUTER.LOGIN} exact component={LoginScreen} /> */}
          <PrivateRoute path='/' Component={MainNavigator} />
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
        <Route path='/overview' exact component={DashboardScreen} />
        <Route path='/login' exact component={LoginScreen} />
        <Route render={() => <Redirect to={ROUTER.OVERVIEW} />} />
      </>
    );
  }
}

export default AppNavigator;
