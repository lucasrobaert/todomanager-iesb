import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/screens/App';
import Login from './src/screens/Login';
import {name as appName} from './app.json';

const Index = () => {
  return <Login email="lucas@robaert.com" />;
};

AppRegistry.registerComponent(appName, () => Index);
