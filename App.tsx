/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {BtnContentText, Button} from './src/components';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button color="action-primary" variant="contained">
          <BtnContentText color="action-primary">alguma coisa</BtnContentText>
        </Button>
      </SafeAreaView>
    </>
  );
};

export default App;
