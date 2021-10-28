import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Checkbox from './Checkbox';

const Comp = ({ filterName, checked, onPress, index }) => {
    console.log('update', Date.now());
    return (
        <View style={styles.itemContainer} key={filterName + index}>
            <Checkbox
                onPress={() => onPress(filterName)}
                checked={checked}
                size={20}
            />
            <Text style={styles.itemName}>{filterName}</Text>
        </View>
    );
};

const MemoizedComp = React.memo(
    Comp,
    (prev, next) => prev.checked === next.checked
);
const voidFunc = () => {};
const FiltersList = ({
    itemsList = [],
    headerTitle = '',
    onItemSelect = voidFunc,
}) => {
    const [checked, setChecked] = useState([]);
    // const [currentPressed, setCurrentPressed] = useState('');
    // const checkboxPress = useCallback(
    //     () =>
    //         setChecked(prev =>
    //             prev.includes(currentPressed)
    //                 ? prev.filter(element => currentPressed !== element)
    //                 : [...prev, currentPressed]
    //         ),
    //     [currentPressed]
    // );

    const checkboxPress = currentPressed =>
        setChecked(prev =>
            prev.includes(currentPressed)
                ? prev.filter(element => currentPressed !== element)
                : [...prev, currentPressed]
        );
    console.log('start ===============================================');
    /** @param {import('react-native').ListRenderItemInfo} params */
    const renderItem = (item, index) => {
        const checkedItem = checked.includes(item);
        // console.log(item);
        return (
            <MemoizedComp
                filterName={item}
                index={index}
                onPress={checkboxPress}
                checked={checkedItem}
            />
        );
    };

    const clearAllPressed = key => {};

    return (
        <View>
            <View>
                <Text style={styles.sectionTitle}>{headerTitle}</Text>
                <TouchableOpacity onPress={clearAllPressed}>
                    <Text>Clear All</Text>
                </TouchableOpacity>
            </View>
            {itemsList.map((filterName, index) =>
                renderItem(filterName, index)
            )}
        </View>
    );
};

export default FiltersList;

const styles = StyleSheet.create({
    itemName: {
        fontSize: 16,
        textTransform: 'capitalize',
        paddingLeft: 6,
    },
    sectionTitle: {
        fontSize: 20,
        textTransform: 'capitalize',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
    },
});
