import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AnimalInfoNavigation,
  FarmInfoNavigation,
  Home,
  ItemFormRegister,
  UserInfoNavigation,
} from '../screens';

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
      <PrivateNavigateStack.Screen
        name="item-form-register"
        options={{header: HeaderNull}}
        component={ItemFormRegister}
      />
      <PrivateNavigateStack.Screen
        name="user-info-page"
        options={{header: HeaderNull}}
        component={UserInfoNavigation}
      />
      <PrivateNavigateStack.Screen
        name="farm-info-page"
        options={{header: HeaderNull}}
        component={FarmInfoNavigation}
      />
      <PrivateNavigateStack.Screen
        name="animal-info-page"
        options={{header: HeaderNull}}
        component={AnimalInfoNavigation}
      />
    </PrivateNavigateStack.Navigator>
  );
}
