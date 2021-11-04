import React, { memo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RNNBottomSheet } from 'react-native-navigation-bottom-sheet';
import { useSelector } from 'react-redux';
import { makeupSelectors } from '../redux/selectors';
import { FlatList } from 'react-native-gesture-handler';

RNNBottomSheet.init();

const BasketItem = ({ item, index }) => {
    console.log(item);
    return (
        <View style={itemStyles.wrap}>
            <View style={itemStyles.container}>
                <Image
                    source={{ uri: 'http:' + item.image }}
                    style={itemStyles.image}
                    resizeMode="contain"
                />
                <Text style={itemStyles.name}>{item.name}</Text>
            </View>

            <Text>{item.count}</Text>
        </View>
    );
};

const itemStyles = StyleSheet.create({
    wrap: {
        flex: 1,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'red',
    },
    name: {
        flexShrink: 1,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
});

const BottomSheetList = list => {
    return (
        <View style={{ borderRadius: 20, paddingTop: 20 }}>
            <FlatList
                style={{ borderRadius: 0 }}
                data={list}
                renderItem={BasketItem}
                horizontal
            />
        </View>
    );
};

const Basket = () => {
    /** @type {Array} */
    const bought = useSelector(makeupSelectors.bought);
    console.log(bought);
    return (
        <>
            <TouchableOpacity
                style={styles.wrap}
                onPress={() =>
                    RNNBottomSheet.openBottomSheet({
                        snapPoints: [0, '30%', '50%', '70%'],
                        initialSnapIndex: 2,
                        borderRadius: 20,
                        renderContent: () => BottomSheetList(bought),
                        renderHeader: () => (
                            <View style={styles.bottomSheetLine} />
                        ),
                        animationConfig: {
                            deceleration: 0.1,
                        },
                    })
                }
            >
                <Icon name="shopping-basket" size={30} />
            </TouchableOpacity>
            <Text style={styles.badge}>
                {bought.reduce((sum, { count }) => sum + count, 0)}
            </Text>
        </>
    );
};

export default Basket;

const styles = StyleSheet.create({
    wrap: {
        paddingRight: 10,
    },
    badge: {
        position: 'absolute',
        textAlign: 'center',
        top: -8,
        right: 5,
        width: 20,
        height: 20,
        fontSize: 14,
        lineHeight: 22,
        color: 'green',
        backgroundColor: '#DFDFDF9F',
        borderRadius: 15,
    },
    bottomSheetLine: {
        position: 'absolute',
        width: 100,
        height: 6,
        top: 0,
        alignSelf: 'center',
        backgroundColor: '#000',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
});
