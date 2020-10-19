import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Login from '../components/LoginForm';

export default () => {
  return (
    <Router>
      <Scene component={Login} title="LOGIN" key="login" initial />
    </Router>
  );
};
