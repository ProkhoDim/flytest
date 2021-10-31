// @ts-check
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Checkbox from '../common/Checkbox';

const Comp = ({ filterName = '', checked = false, onPress }) => {
    // console.log('update', Date.now());
    // console.log(filterName + index);
    return (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => onPress(filterName)}
        >
            <Checkbox checked={checked} size={20} />
            <Text style={styles.itemName}>{filterName}</Text>
        </TouchableOpacity>
    );
};

export default React.memo(Comp, (prev, next) => prev.checked === next.checked);

const styles = StyleSheet.create({
    itemName: {
        fontSize: 16,
        textTransform: 'capitalize',
        paddingLeft: 6,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 3,
        marginVertical: 3,
    },
});
