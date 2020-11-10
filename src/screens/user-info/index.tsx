import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserInfoPage} from './user-info-page';

const Navigation = createStackNavigator();
const headerNull = () => null;

export function UserInfoNavigation() {
  return (
    <Navigation.Navigator initialRouteName="user-info-page">
      <Navigation.Screen
        options={{header: headerNull}}
        name="user-info-page"
        component={UserInfoPage}
      />
    </Navigation.Navigator>
  );
}
