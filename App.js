/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import Main from './project/main';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#001524',
    secondary: '#FF9633',
    background: '#FFECD1',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#FFF8F0" barStyle="dark-content" />
      <Main />
    </PaperProvider>
  );
};

export default App;
