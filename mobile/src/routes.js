import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './pages/HomeScreen/index';
import NotificationsScreen from './pages/NotificationsScreen/index'

const Drawer = createDrawerNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
}