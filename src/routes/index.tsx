import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PrivateRoutes} from './private-routes';

const navigateStack = createStackNavigator();
const HeaderNull = () => null;

export function AppRouteSwitch() {
  return (
    <NavigationContainer>
      <navigateStack.Navigator initialRouteName="client">
        <navigateStack.Screen
          name="client"
          options={{header: HeaderNull}}
          component={PrivateRoutes}
        />
      </navigateStack.Navigator>
    </NavigationContainer>
  );
}
