// @ts-check
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { MakeupActions } from '../redux';
import queryData from '../services/queryData';
import FiltersList from './FilterLIst/FiltersList';
import BrandPicker from './BrandPicker';

/**
 * @type {import('react-native-navigation').NavigationFunctionComponent}
 */
const Filters = () => {
    return (
        <ScrollView style={styles.wrap}>
            <FiltersList
                headerTitle={queryData[0].title}
                itemsList={queryData[0].data}
                action={MakeupActions.updateTag}
            />
            <BrandPicker />
        </ScrollView>
    );
};

export default Filters;

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        // backgroundColor: '#FFFF90',
    },
});
