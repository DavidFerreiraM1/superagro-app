import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserFormRegister as UserFormContext} from '../../context';
import {FormName} from './form-username';
import {FormEmail} from './form-email';
import {FormPassword} from './form-password';
import {FormConfirmPassword} from './form-confirm-password';
import {FormFarmName} from './form-farm-name';
import {RegisterFinalStaging} from './register-final-staging';

const StackFormNavigation = createStackNavigator();
const headerNull = () => null;
export function UserFormRegister() {
  return (
    <UserFormContext>
      <StackFormNavigation.Navigator initialRouteName="form-name">
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={FormName}
          name="form-name"
        />
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={FormEmail}
          name="form-cpf"
        />
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={FormPassword}
          name="form-password"
        />
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={FormConfirmPassword}
          name="form-confirm-password"
        />
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={FormFarmName}
          name="form-farm-name"
        />
        <StackFormNavigation.Screen
          options={{header: headerNull}}
          component={RegisterFinalStaging}
          name="register-final-stage"
        />
      </StackFormNavigation.Navigator>
    </UserFormContext>
  );
}
