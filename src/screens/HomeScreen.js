// @ts-check
import React, {useEffect} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  NavigationFunctionComponent,
  NavigationComponentProps,
} from 'react-native-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {CounterActions} from '../services';

/**
 * @type NavigationFunctionComponent
 * @param {NavigationComponentProps} props
 */
const HomeScreen = props => {
  /**@type {Object} */
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(state);

  useEffect(() => {
    dispatch(CounterActions.init());
  }, []);

  const counterIncrement = () => {
    dispatch(CounterActions.increment(state.counterPayload));
  };
  const counterDecrement = () => {
    dispatch(CounterActions.decrement(state.counterPayload));
  };
  const resetStore = () => {
    dispatch(CounterActions.init());
  };
  return (
    <SafeAreaView style={styles.wrap}>
      <Text style={styles.text}> Home Screen </Text>

      <Text style={styles.text}>{state.text}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={counterIncrement} />
        <Button title="Decrement" onPress={counterDecrement} />
      </View>
      <Button title="Reset" onPress={resetStore} />
    </SafeAreaView>
  );
};

// HomeScreen.options = {
//   topBar: {
//     // leftButtons: [{component: {name: nav_comp.BURGER}, id: nav_ids.homeBurger}],
//   },
// };

export default HomeScreen;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    color: 'red',
  },
  text: {fontSize: 20, textAlign: 'center'},
});
