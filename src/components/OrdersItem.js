import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../global/colors';

const OrdersItem = ({ orders }) => {
  const total = orders.items.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
        <Text style={styles.date}>{new Date(orders.createdAt).toLocaleString()}</Text>
        <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
      </View>
      <Feather name="search" size={24} color={colors.orange} />
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
    paddingBottom: 18,
  },
  orderInfo: {
    flex: 1,
    marginRight: 16,
    gap: 8
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  total: {
    fontSize: 14,
    color: colors.green,
  },
});

export default OrdersItem;
