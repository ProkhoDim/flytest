import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {NavigationFunctionComponent} from 'react-native-navigation';
/**
 * @type NavigationFunctionComponent
 * @param {NavigationComponentProps & SettingsScreenProps} props
 */
const Counter = () => {
  const counterValue = useSelector(state => state.counter);
  return (
    <View style={styles.wrap}>
      <Text>Counter value: {counterValue}</Text>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  wrap: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
});
