import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register, TodoTasks, DoneTasks} from '../screens/Screens';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Routes = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShow: false}}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="TaskList" component={TaskTab} />
    </Stack.Navigator>
  );
};

export const TaskTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="To Do" component={TodoTasks} />
      <Tab.Screen name="Done" component={DoneTasks} />
    </Tab.Navigator>
  );
};

export default Routes;
