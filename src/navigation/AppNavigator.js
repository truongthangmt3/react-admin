import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { DashboardScreen, LoginScreen, Dashboard2Screen , BaseScreen} from '../screens/index';
import Menu from '../components/Menu';
import Header from '@components/Header';
import { ROUTER } from '../constants/Constant';
import PrivateRoute from './PrivateRoute';

class AppNavigator extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={"/login"} exact component={LoginScreen} />
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
        {/* <Route path='/overview' exact component={DashboardScreen} /> */}
        <Switch>
        <Route path='/overview' exact component={Dashboard2Screen} />
        <Route path='/login' exact component={LoginScreen} />
        <Route path='/base-screen' exact component={BaseScreen} />
        <Route render={() => <Redirect to={"base-screen"} />} />
        </Switch>
      </>
    );
  }
}

export default AppNavigator;
