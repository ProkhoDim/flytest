/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
};

App.options = {
  topBar: {
    title: {
      text: 'Home flytest',
      color: '#FFF',
    },
    background: {
      color: '#FF0000',
    },
  },
};

const styles = StyleSheet.create({});

export default App;
