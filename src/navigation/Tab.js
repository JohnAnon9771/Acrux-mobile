import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tasks from '../screens/Tasks';
import NewTask from '../screens/NewTask';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function RouteTab() {
  return (
    <Tab.Navigator initialRouteName="tasks">
      <Tab.Screen name="Tasks" component={Tasks} />
      <Tab.Screen name="NewTask" component={NewTask} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
