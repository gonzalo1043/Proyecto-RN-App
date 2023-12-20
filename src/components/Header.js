import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../global/colors';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.orange, 
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40
  },
  title: {
    fontSize: 24,
    color: colors.black,
    fontWeight: 'bold',
  },
});

export default Header;
