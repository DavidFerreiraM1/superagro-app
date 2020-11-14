import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoadLoginPage, UserFormRegister} from '../screens';

const PublicRoutesNavigate = createStackNavigator();
const HeaderNull = () => null;
export function PublicRoutes() {
  return (
    <PublicRoutesNavigate.Navigator initialRouteName="load-login">
      <PublicRoutesNavigate.Screen
        name="load-login"
        options={{header: HeaderNull}}
        component={LoadLoginPage}
      />
      <PublicRoutesNavigate.Screen
        name="user-form-register"
        options={{header: HeaderNull}}
        component={UserFormRegister}
      />
    </PublicRoutesNavigate.Navigator>
  );
}
