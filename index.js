import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import Route from './src/routes/Route';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';

const wrappedRoutes = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Route />
      </SafeAreaView>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => wrappedRoutes);
