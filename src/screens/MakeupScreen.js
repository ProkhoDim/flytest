// @ts-check
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useNavigationButtonPress } from 'react-native-navigation-hooks/dist';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';
import SearchForm from '../components/SearchForm/SearchForm';
import { CounterActions, MakeupActions } from '../redux';
import { makeupSelectors } from '../redux/selectors';

/**
 * @typedef {import('react-native-navigation').NavigationFunctionComponent} FunctionalComponent
 * @typedef {import('react-native-navigation').NavigationComponentProps} NavigationComponentProps
 * @typedef {import('react-native-navigation').Options} Options
 * @type {FunctionalComponent}
 * @param {NavigationComponentProps} props
 */
const MakeupScreen = props => {
    const dispatch = useDispatch();
    const listOfProducts = useSelector(makeupSelectors.products);
    useEffect(() => {
        Navigation.mergeOptions(props.componentId, {
            topBar: {
                leftButtons: [{ id: 'SearchOptions', text: 'Filters' }],
            },
        });
        console.log('update');
    }, [props.componentId]);

    useEffect(() => {
        dispatch(MakeupActions.getInitialList());
    }, [dispatch]);

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

    const renderProductItem = ({ item }) => {
        return <ProductItem product={item} key={item.id} />;
    };
    return (
        <View style={styles.wrap}>
            <FlatList
                data={listOfProducts}
                numColumns={2}
                style={styles.productList}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={styles.productColumnWrapper}
                contentContainerStyle={styles.productContainer}
                keyExtractor={(item, index) => item.name + index}
                renderItem={renderProductItem}
            />
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
    productList: {
        width: '100%',
        paddingHorizontal: 10,
    },
    productContainer: {
        width: '100%',
    },
    productColumnWrapper: {
        // alignItems: 'center',
        justifyContent: 'space-between',
    },
});
