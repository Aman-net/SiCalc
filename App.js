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
    primary: '#4C352F',
    secondary: '#ffe083', // pallete 2
    background: '#F9F7F0',
  },
};

// primary: '#1f271b',
// secondary: '#ffd23f', //00A9A5 // pallete 1
// background: '#f3fcf0',

// primary: '#03045e',
// secondary: '#00b4d8',  // pallete 2
// background: '#caf0f8',

// primary: '#184e77',
//     secondary: '#76c893',  // pallete 3
//     background: '#d9ed92',

// primary: '#0F293A',
//     secondary: '#62B6CB',  // pallete 3
//     background: '#CAE9FF',

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle="light-content"
      />
      <Main />
    </PaperProvider>
  );
};

export default App;
