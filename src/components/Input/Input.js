import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const Input = ({placeholder, placeholderTextColor, onChangeText, value}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
