// @ts-check
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
  NavigationComponentProps,
} from 'react-native-navigation';

/**
 * @type NavigationFunctionComponent
 * @param {NavigationComponentProps & Object} props
 */
const Burger = props => {
  const updateOption = () => {
    Navigation.mergeOptions('SIDE_MENU', {
      sideMenu: {left: {visible: true}},
    });
  };
  return (
    <TouchableOpacity style={styles.burgerContainer} onPress={updateOption}>
      <View style={[styles.line, styles.marginBottom]} />
      <View style={[styles.line, styles.marginBottom]} />
      <View style={styles.line} />
    </TouchableOpacity>
  );
};

export default Burger;

const styles = StyleSheet.create({
  burgerContainer: {
    backgroundColor: 'red',
    padding: 10,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: 'green',
  },
  marginBottom: {
    marginBottom: 7,
  },
});
