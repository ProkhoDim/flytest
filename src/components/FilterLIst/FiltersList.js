// @ts-check
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import FilterListItem from './FilterListItem';

const FiltersList = ({ itemsList = [], headerTitle = '', action }) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState([]);
    const [visibleItems, setVisibleItems] = useState(10);

    /** @param {String} currentPressed */
    const checkboxPress = currentPressed =>
        setChecked(prev => {
            const updatedChecked = prev.includes(currentPressed)
                ? prev.filter(element => currentPressed !== element)
                : [...prev, currentPressed];

            dispatch(action(updatedChecked));
            return updatedChecked;
        });

    /**
     * @param {String} filterName
     * @param {Number} index
     * @returns {import('react').ReactComponentElement}
     */
    const renderItem = (filterName, index) => {
        const checkedItem = checked.includes(filterName);
        return (
            <FilterListItem
                filterName={filterName}
                key={filterName + index}
                onPress={checkboxPress}
                checked={checkedItem}
            />
        );
    };

    const allPressed = () =>
        setChecked(prev => {
            const list = prev.length ? [] : [...itemsList];

            dispatch(action(list));
            return list;
        });

    return (
        <View>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>{headerTitle}</Text>
                <TouchableOpacity onPress={allPressed}>
                    <Text>{checked.length ? 'Clear All' : 'Select All'}</Text>
                </TouchableOpacity>
            </View>

            {itemsList
                .slice(0, visibleItems)
                .map((filterName, index) => renderItem(filterName, index))}

            {visibleItems !== itemsList.length ? (
                <TouchableOpacity
                    onPress={() => setVisibleItems(itemsList.length)}
                    style={styles.additionalText}
                >
                    <Text>Show more(+{itemsList.length - visibleItems})</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    onPress={() => setVisibleItems(10)}
                    style={styles.additionalText}
                >
                    <Text>Hide</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default FiltersList;

const styles = StyleSheet.create({
    sectionTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    sectionTitle: {
        fontSize: 20,
        textTransform: 'capitalize',
    },
    additionalText: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: 'center',
        paddingVertical: 3,
        marginVertical: 3,
    },
});
