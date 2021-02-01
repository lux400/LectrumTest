import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './routes/Login';
import Signup from './routes/Signup';

export const App = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Redirect from="/" to="/login" />
    </Switch>
  );
};
