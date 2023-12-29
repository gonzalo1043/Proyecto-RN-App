import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import allOrders from '../data/orders.json';
import OrdersItem from '../components/OrdersItem';
import { colors } from '../global/colors';

const Orders = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={allOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrdersItem orders={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.black
  },
});

export default Orders;
