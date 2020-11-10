import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FarmInfoPage} from './farm-info-page';

const Navigation = createStackNavigator();
const headerNull = () => null;

export function FarmInfoNavigation() {
  return (
    <Navigation.Navigator initialRouteName="farm-info-page">
      <Navigation.Screen
        options={{header: headerNull}}
        name="farm-info-page"
        component={FarmInfoPage}
      />
    </Navigation.Navigator>
  );
}
