import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NameFormPage} from './name-form-page';
import {AnimalCategoryFormPage} from './animal-category-form-page';
import {FarmTypeFormPage} from './farm-type-form-page';
import {LocationFormPage} from './location-form-page';
import {BirthDateFormPage} from './birth-data-form-page';
import {IntracePlantelFormPage} from './intrace-plantel-form-page';
import {AnimalWeightFormPAge} from './animal-weight-form-page';
import {SpeciesFormPage} from './species-form-page';
import {TrackingCodeFormPage} from './tracking-code-form-page';
import {PhaseProductionFormPage} from './phase-production-form-page';
import {AnimalStatusFormPage} from './animal-status-input-form-page';
import {FormRegister} from './form-context';
import {RegisterFinalStaging} from './register-final-staging';

const StackFormNavigation = createStackNavigator();
const headerNull = () => null;
export function ItemFormRegister() {
  return (
    <FormRegister>
      <StackFormNavigation.Navigator initialRouteName="nome">
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={AnimalCategoryFormPage}
          name="animal-type"
        />
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={NameFormPage}
          name="name"
        />
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={LocationFormPage}
          name="location"
        />
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={BirthDateFormPage}
          name="birth-date"
        />
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={IntracePlantelFormPage}
          name="intrace-plantel"
        />
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={AnimalWeightFormPAge}
          name="animal-weight"
        />
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={SpeciesFormPage}
          name="animal-species"
        />
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={TrackingCodeFormPage}
          name="tracking-code"
        />
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={PhaseProductionFormPage}
          name="phase-production"
        />
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={FarmTypeFormPage}
          name="farm-type"
        />
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={AnimalStatusFormPage}
          name="animal-status"
        />
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={RegisterFinalStaging}
          name="register-final-staging"
        />
      </StackFormNavigation.Navigator>
    </FormRegister>
  );
}
