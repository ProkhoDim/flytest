// @ts-check
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useNavigationButtonPress } from 'react-native-navigation-hooks/dist';
import { useDispatch } from 'react-redux';
import SearchForm from '../components/SearchForm/SearchForm';
import { CounterActions } from '../services';

/**
 * @typedef {import('react-native-navigation').NavigationFunctionComponent} FunctionalComponent
 * @typedef {import('react-native-navigation').NavigationComponentProps} NavigationComponentProps
 * @typedef {import('react-native-navigation').Options} Options
 * @type {FunctionalComponent}
 * @param {NavigationComponentProps} props
 */
const MakeupScreen = props => {
    const dispatch = useDispatch();
    useEffect(() => {
        Navigation.mergeOptions(props.componentId, {
            topBar: {
                leftButtons: [{ id: 'SearchOptions', text: 'Filters' }],
            },
        });
        console.log('update');
    }, [props.componentId]);

    const filterButtonPress = ({ buttonId }) => {
        console.log(buttonId);
        if (buttonId === 'SearchOptions') {
            dispatch(CounterActions.unsetIsCounter());
            Navigation.mergeOptions('SIDE_MENU', {
                sideMenu: { left: { visible: true, width: 250 } },
            });
        }
    };
    useNavigationButtonPress(filterButtonPress, props.componentId);
    return (
        <View style={styles.wrap}>
            <SearchForm />
        </View>
    );
};

MakeupScreen.options = {
    topBar: {
        leftButtons: [{ id: 'SearchOptions', text: 'Filters' }],
    },
};

export default MakeupScreen;

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        alignItems: 'center',
    },
});
