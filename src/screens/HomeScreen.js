// @ts-check
import React, { useEffect } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import nav_comp from '../navigation/nav_comp';
import nav_ids from '../navigation/nav_ids';
import routes from '../navigation/routes';
import { CounterActions } from '../services';
import { counterSelectors } from '../services/selectors';

/**
 * @type {import('react-native-navigation').NavigationFunctionComponent}
 * @param {import('react-native-navigation').NavigationComponentProps} props
 */
const HomeScreen = props => {
    const text = useSelector(counterSelectors.text);
    const counterPayload = useSelector(counterSelectors.counterPayload);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CounterActions.init());
    }, [dispatch]);

    const counterIncrement = () => {
        dispatch(CounterActions.increment(counterPayload));
    };
    const counterDecrement = () => {
        dispatch(CounterActions.decrement(counterPayload));
    };
    const resetStore = () => {
        dispatch(CounterActions.init());
    };
    return (
        <SafeAreaView style={styles.wrap}>
            <Text style={styles.text}> Home Screen </Text>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Increment" onPress={counterIncrement} />
                <Button title="Decrement" onPress={counterDecrement} />
            </View>
            <Button title="Reset" onPress={resetStore} />
        </SafeAreaView>
    );
};

HomeScreen.options = {
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
    },
};

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
    text: { fontSize: 20, textAlign: 'center' },
});
