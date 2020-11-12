/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {AppRouteSwitch} from './src/routes';
import store from './src/redux/index';

const App = () => (
  <Provider store={store}>
    <AppRouteSwitch />
  </Provider>
);

export default App;
