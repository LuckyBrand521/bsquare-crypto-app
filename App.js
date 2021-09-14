/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import {StyleSheet, useColorScheme, Text} from 'react-native';
import {DeviceEventEmitter} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import Navigation from './src/Navigation';
import {Provider} from 'react-redux';
import {store, persistor} from './src/Store';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#1463A0',
        100: '#1463A0',
        200: '#1463A0',
        300: '#1463A0',
        400: '#1463A0',
        500: '#1463A0',
        600: '#1463A0',
        700: '#1463A0',
        800: '#1463A0',
        900: '#1463A0',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'light',
    },
  });

  return (
    // <Provider store={store}>
    //     <PaperProvider>
    <NativeBaseProvider theme={theme}>
      <Navigation />
    </NativeBaseProvider>
    //     </PaperProvider>
    // </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
