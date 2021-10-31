// @ts-check
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import nav_comp from '../navigation/nav_comp';
import nav_ids from '../navigation/nav_ids';
import { CounterActions } from '../redux';
import { counterSelectors } from '../redux/selectors';

/**
 * @typedef {Object} SettingsScreenProps
 * @property {String} text passed prop from another component
 * @property {String} backTo for which component back to
 */

/**
 *
 * @type {import('react-native-navigation').NavigationFunctionComponent} Component with Navigation
 * @param {import('react-native-navigation').NavigationComponentProps & SettingsScreenProps} props
 */
const SettingsScreen = props => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    // @ts-ignore
    const payloadValue = useSelector(counterSelectors.counterPayload);

    useEffect(() => {
        setValue(payloadValue.toString());
    }, [payloadValue]);

    const onInputChange = (/** @type {String} */ text) => {
        const parsedValue = text
            ? /\d{1,}\.\d{1,}|\d{1,}\.|\d{1,}/.exec(text)
            : 0;

        setValue(parsedValue ? parsedValue[0] : '');
    };

    const counterUpdate = () => {
        dispatch(CounterActions.updateCounter(+value));
    };

    return (
        <View>
            <Text style={styles.text}> Settings Screen </Text>
            <View>
                <TextInput
                    value={value}
                    keyboardType="number-pad"
                    placeholder="Input counter increment"
                    onChangeText={onInputChange}
                />
                <Button title="Update" onPress={counterUpdate} />
            </View>
        </View>
    );
};

SettingsScreen.options = {
    topBar: {
        leftButtons: [
            {
                id: nav_comp.BURGER,
                component: {
                    name: nav_comp.BURGER,
                    id: nav_ids.homeBurger,
                },
            },
        ],
        backButton: { popStackOnPress: false },
    },
    animations: { push: { enabled: true, waitForRender: false } },
};

export default SettingsScreen;

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
    },
    text: {
        fontSize: 20,
    },
});
