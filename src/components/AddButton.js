import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { colors } from '../global/colors';

const AddButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.greenLime,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    width: 200
  },
  buttonText: {
    color: colors.black,
    fontSize: 16,
  },
});
