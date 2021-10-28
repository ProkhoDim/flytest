// @ts-check
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { counterSelectors } from '../services/selectors';

/**
 * @type {import('react-native-navigation').NavigationFunctionComponent}
 */
const Counter = () => {
    const counterValue = useSelector(counterSelectors.counter);
    return (
        <View>
            <Text>Counter value: {counterValue}</Text>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({});
