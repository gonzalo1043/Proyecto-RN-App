import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { colors } from '../global/colors';

const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        style={styles.input}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: colors.clearGrey,
  },
  input: {
    height: 40,
    borderColor: colors.clearGrey,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  errorText: {
    color: '#e74c3c',
    marginTop: 5,
  },
});
