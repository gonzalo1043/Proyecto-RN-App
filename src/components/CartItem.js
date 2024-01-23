import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../global/colors';

const CartItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}> cantidad: {item.quantity} precio: ${item.price}</Text>
      </View>
      <Feather name="trash" size={24} color={colors.orange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 8,
  },
  itemInfo: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  category: {
    color: '#666666',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.green,
  },
});

export default CartItem;
