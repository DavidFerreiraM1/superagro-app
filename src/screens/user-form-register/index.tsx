import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserFormRegister as UserFormContext} from '../../context';
import {FormName} from './form-username';
import {FormCpf} from './form-cpf';
import {FormPassword} from './form-password';
import {FormConfirmPassword} from './form-confirm-password';

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
          component={FormCpf}
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
      </StackFormNavigation.Navigator>
    </UserFormContext>
  );
}
