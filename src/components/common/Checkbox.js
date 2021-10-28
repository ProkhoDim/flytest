// @ts-check
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
/**
 * @typedef {import('react-native').ViewStyle} Styles
 */

const Checkbox = ({
    size = 30,
    color = 'grey',
    fillColor = '#00AAFF',
    checked = false,
    onPress = () => console.log(),
    style = {},
}) => {
    /** @type {Styles}*/
    const boxStyles = {
        borderWidth: 1,
        width: size,
        borderRadius: size * 0.1,
        height: size,
        borderColor: checked ? fillColor : color,
        backgroundColor: checked ? fillColor : null,
    };
    /** @type {Styles} */
    const firstLineStyles = {
        width: size / 3,
        height: 0.1 * size,
        borderTopLeftRadius: size * 0.08,
        backgroundColor: checked ? 'white' : null,
        position: 'absolute',
        transform: [
            { translateX: size / 9 },
            { translateY: size / 2 },
            { rotateZ: '45deg' },
        ],
    };
    /** @type {Styles} */
    const secondLineStyles = {
        width: size / 1.5,
        height: 0.1 * size,
        borderTopRightRadius: size * 0.08,
        backgroundColor: checked ? 'white' : null,
        position: 'absolute',
        transform: [
            { translateX: size / 4 },
            { translateY: size / 2.5 },
            { rotateZ: '-45deg' },
        ],
    };

    return (
        <TouchableOpacity
            style={[boxStyles, style]}
            onPress={() => onPress(checked)}>
            <View style={firstLineStyles} />
            <View style={secondLineStyles} />
        </TouchableOpacity>
    );
};

export default Checkbox;
