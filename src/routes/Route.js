import {createStackNavigator} from '@react-navigation/stack';
import {
  App,
  Login,
  Register,
  TodoTasks,
  DoneTasks,
  Task,
} from '../screens/Screens';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Routes = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen name="App" component={App} options={{headerShow: false}} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShow: false}}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="TaskList" component={TaskTab} />
      <Stack.Screen name="Task" component={Task} />
    </Stack.Navigator>
  );
};

export const TaskTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        iconStyle: {width: 20, height: 20},
      }}>
      <Tab.Screen name="To Do" component={TodoTasks} />
      <Tab.Screen name="Done" component={DoneTasks} />
    </Tab.Navigator>
  );
};

export default Routes;
