import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AnimalInfoPage} from './animal-info-page';
import {UpdateValueTextPage} from './update-value-text-page';
import {AnimalCategoryUpdatePage} from './animal-category-update-page';
import {ProductionPhaseUpdatePage} from './production-phase-update-page';
import {FarmTypeUpdatePage} from './farm-type-update-page';
import {AnimalStatusUpdatePage} from './animal-status-update-page';

const Navigation = createStackNavigator();
const headerNull = () => null;

export function AnimalInfoNavigation() {
  return (
    <Navigation.Navigator>
      <Navigation.Screen
        options={{header: headerNull}}
        name="list-page"
        component={AnimalInfoPage}
      />
      <Navigation.Screen
        options={{header: headerNull}}
        name="update-value-text-page"
        component={UpdateValueTextPage}
      />
      <Navigation.Screen
        options={{header: headerNull}}
        name="animal-category-update-page"
        component={AnimalCategoryUpdatePage}
      />
      <Navigation.Screen
        options={{header: headerNull}}
        name="production-phase-update-page"
        component={ProductionPhaseUpdatePage}
      />
      <Navigation.Screen
        options={{header: headerNull}}
        name="farm-type-update-page"
        component={FarmTypeUpdatePage}
      />
      <Navigation.Screen
        options={{header: headerNull}}
        name="animal-status-update-page"
        component={AnimalStatusUpdatePage}
      />
    </Navigation.Navigator>
  );
}
