import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons'

import TabADetailsScreen from '../TabADetailsScreen';
import Details from '../Details';


const Stack = createStackNavigator();

export default function TabAScreen() {
    return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="TabA Home" component={TabADetailsScreen} />
        <Stack.Screen name="TabA Details" component={Details} />
      </Stack.Navigator>
    );
  }