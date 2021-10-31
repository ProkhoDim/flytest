// @ts-check
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { counterSelectors } from '../redux/selectors';
import Counter from './Counter';
import Filters from './Filters';

/**
 * @type {import('react-native-navigation').NavigationFunctionComponent}
 * @param {import('react-native-navigation').NavigationComponentProps & {counter:boolean}} props
 */

const LeftSideMenu = ({ componentId, counter }) => {
    const isCounter = useSelector(counterSelectors.isCounter);
    return (
        <View style={styles.wrap}>{isCounter ? <Counter /> : <Filters />}</View>
    );
};

export default LeftSideMenu;

const styles = StyleSheet.create({
    wrap: {
        padding: 10,
        backgroundColor: 'white',
        flex: 1,
    },
});
