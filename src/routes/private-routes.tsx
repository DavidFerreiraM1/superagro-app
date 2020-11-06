import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens';

const PrivateNavigateStack = createStackNavigator();
const HeaderNull = () => null;
export function PrivateRoutes() {
  return (
    <PrivateNavigateStack.Navigator initialRouteName="home">
      <PrivateNavigateStack.Screen
        name="home"
        options={{header: HeaderNull}}
        component={Home}
      />
    </PrivateNavigateStack.Navigator>
  );
}
