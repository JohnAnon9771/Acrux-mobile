import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';

import Tasks from '../screens/Tasks';
import NewTask from '../screens/NewTask';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function RouteTab() {
  return (
    <Tab.Navigator
      initialRouteName="tasks"
      tabBarOptions={{
        activeTintColor: 'rgb(15, 16, 32)',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Tasks') {
            iconName = 'tasks';
          } else if (route.name === 'NewTask') {
            iconName = focused ? 'plus-circle' : 'plus';
            return <Feather name={iconName} size={size + 2} color={color} />;
          } else {
            iconName = 'user-circle';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Tasks"
        options={{ tabBarLabel: 'Tarefas' }}
        component={Tasks}
      />
      <Tab.Screen
        name="NewTask"
        options={{ tabBarLabel: 'Nova tarefa' }}
        component={NewTask}
      />
      <Tab.Screen
        name="Profile"
        options={{ tabBarLabel: 'Perfil' }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
