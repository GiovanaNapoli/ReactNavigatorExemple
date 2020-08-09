import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'

import TabAScreen from '../TabAScreen/index';
import TabBScreen from '../TabBScreen/index';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
    return (
      <Tab.Navigator
        screenOptions={
          ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Second') {
                iconName = focused
                  ? 'anchor'
                  : 'anchor';
              }
              return <Feather name={iconName} size={size} color={color} />;
            },
          })
        }
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
  
        <Tab.Screen name="Home" component={TabAScreen} />
        <Tab.Screen name="Second" component={TabBScreen} />
      </Tab.Navigator>
    );
  }