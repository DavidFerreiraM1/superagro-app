import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AnimalInfoPage} from './animal-info-page';

const Navigation = createStackNavigator();
const headerNull = () => null;

export function AnimalInfoNavigation() {
  return (
    <Navigation.Navigator initialRouteName="animal-info-page">
      <Navigation.Screen
        options={{header: headerNull}}
        name="animal-info-page"
        component={AnimalInfoPage}
      />
    </Navigation.Navigator>
  );
}
