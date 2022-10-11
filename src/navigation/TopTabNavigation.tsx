import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import About from '../pages/afterLogin/About';
import BaseStats from '../pages/afterLogin/BaseStats';
import Evolution from '../pages/afterLogin/Evolution';
import Moves from '../pages/afterLogin/Moves';


const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigation () {
    return (
        <Tab.Navigator
            
        >
          <Tab.Screen name="About" component={About} />
          <Tab.Screen name="BaseStats" component={BaseStats} />
          <Tab.Screen name="Evolution" component={Evolution} />
          <Tab.Screen name="Moves" component={Moves} />
        </Tab.Navigator>
      );
}