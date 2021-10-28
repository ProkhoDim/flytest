// @ts-check
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useDispatch } from 'react-redux';
import { bottomTabs } from '../navigation/rootConfig';
import routes from '../navigation/routes';
import { CounterActions } from '../services';

/**
 * @typedef {import('react-native-navigation').NavigationFunctionComponent} NavigationFunctionComponent
 * @typedef {import('react-native-navigation').NavigationComponentProps} NavigationComponentProps
 */

/**
 * @typedef {Object} BurgerProps
 * @property {String} text text for Burger
 */

/**
 * @type NavigationFunctionComponent
 * @param {NavigationComponentProps & BurgerProps} props
 */
const Burger = props => {
    const dispatch = useDispatch();
    const updateOption = () => {
        dispatch(CounterActions.setIsCounter());
        Navigation.mergeOptions('SIDE_MENU', {
            sideMenu: {
                left: {
                    visible: true,
                    width: 300,
                },
            },
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
