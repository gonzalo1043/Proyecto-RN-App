import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const TabIconShop = ({ focused }) => {
  return (
    <View style={styles.container}>
      <Entypo name="shop" size={24} color={focused ? 'black' : 'grey'} />
      <Text style={{ color: focused ? 'black' : 'grey', marginTop: 4 }}>Shop</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default TabIconShop;
