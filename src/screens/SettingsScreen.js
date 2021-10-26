// @ts-check
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  NavigationFunctionComponent,
  NavigationComponentProps,
} from 'react-native-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {CounterActions} from '../services';

/**
 * @typedef {Object} SettingsScreenProps
 * @property {String} text passed prop from another component
 * @property {String} backTo for which component back to
 */

/**
 * @type NavigationFunctionComponent
 * @param {NavigationComponentProps & SettingsScreenProps} props
 */
const SettingsScreen = props => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const payloadValue = useSelector(s => s.counterPayload);

  useEffect(() => {
    setValue(payloadValue.toString());
  }, [payloadValue]);

  const onInputChange = value => {
    const parsedValue = value
      ? /\d{1,}\.\d{1,}|\d{1,}\.|\d{1,}/.exec(value)
      : 0;

    setValue(parsedValue ? parsedValue[0] : '');
  };

  const counterUpdate = () => {
    dispatch(CounterActions.updateCounter(+value));
  };

  return (
    <View>
      <Text style={styles.text}> Settings Screen </Text>
      <View>
        <TextInput
          value={value}
          keyboardType="number-pad"
          placeholder="Input counter increment"
          onChangeText={onInputChange}
        />
        <Button title="Update" onPress={counterUpdate} />
      </View>
    </View>
  );
};

SettingsScreen.options = {
  topBar: {
    // leftButtons: [{text: 'Home', allCaps: false, id: 'SettingsBackButton'}],
    backButton: {popStackOnPress: false},
  },
  animations: {push: {enabled: true, waitForRender: false}},
};

export default SettingsScreen;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
});
