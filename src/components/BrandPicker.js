// @ts-check
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import queryData from '../services/queryData';

const BrandPicker = () => {
    const [selectedBrand, setSelectedBrand] = useState('');
    return (
        <>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>{queryData[1].title}</Text>
                <TouchableOpacity onPress={() => setSelectedBrand('')}>
                    <Text>Reset</Text>
                </TouchableOpacity>
            </View>
            <Picker
                selectedValue={selectedBrand}
                onValueChange={item => setSelectedBrand(item)}
                mode="dropdown"
            >
                {queryData[1].data.map(brandName => (
                    <Picker.Item
                        value={brandName.toLowerCase()}
                        label={brandName}
                        key={brandName}
                    />
                ))}
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
