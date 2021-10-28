import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { SearchActions } from '../../services';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        console.log('dispatch');
        dispatch(SearchActions.searchType(inputValue));
    }, [dispatch, inputValue]);

    return (
        <View style={styles.container}>
            <TextInput
                value={inputValue}
                placeholder="Enter product name ..."
                onChangeText={setInputValue}
                style={styles.input}
            />
        </View>
    );
};

export default SearchForm;

const styles = StyleSheet.create({
    container: {
        width: '80%',
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        padding: 6,
        paddingHorizontal: 15,
    },
});
