// @ts-check
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import queryData from '../services/queryData';
import { useDispatch } from 'react-redux';
import { updateBrand } from '../redux/makeup/actions';

const BrandPicker = () => {
    const dispatch = useDispatch();
    const [selectedBrand, setSelectedBrand] = useState('');
    /** @param {String} [item]  */
    const selectBrandPressed = (item = '') => {
        dispatch(updateBrand(item));
        setSelectedBrand(item);
    };

    const resetBrandPressed = () => {
        dispatch(updateBrand(''));
        setSelectedBrand('');
    };

    return (
        <>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>{queryData[1].title}</Text>
                <TouchableOpacity onPress={resetBrandPressed}>
                    <Text>Reset</Text>
                </TouchableOpacity>
            </View>
            <Picker
                selectedValue={selectedBrand}
                onValueChange={selectBrandPressed}
                mode="dropdown"
            >
                {queryData[1].data.map(brandName => {
                    const value = brandName !== 'Select brand' ? brandName.toLowerCase() : '';
                    return <Picker.Item
                        value={value}
                        label={brandName}
                        key={brandName}
                    />;
                })}
            </Picker>
        </>
    );
};

export default BrandPicker;

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
});
