import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import Welcome from '../screens/Welcome';
import Categories from '../screens/Categories';
import {Colors} from '../constants/Colors';

export type TTabNavigator = {
  Welcome: undefined;
  Category: undefined;
};

const Tab = createMaterialTopTabNavigator<TTabNavigator>();

export default function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: '',
        tabBarActiveTintColor: Colors.tabBarColor,
        tabBarIndicatorStyle: {backgroundColor: Colors.tabBarColor},
      }}>
      <Tab.Screen name={'Welcome'} component={Welcome} />
      <Tab.Screen name={'Category'} component={Categories} />
    </Tab.Navigator>
  );
}
