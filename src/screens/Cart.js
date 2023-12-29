import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native';
import allCart from '../data/cart.json';
import CartItem from '../components/CartItem';
import { colors } from '../global/colors';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCartProducts(allCart);
  }, []);

  useEffect(() => {
    const total = cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(total);
  }, [cartProducts]);

  return (
    <View style={styles.container}>
      <FlatList
        data={cartProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.footer}>
        <Pressable style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </Pressable>
        <Text style={styles.totalText}>Total: $ {total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.black
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    marginTop: 16,
    paddingTop: 16,
    alignItems: 'flex-end',
    paddingBottom: 130
  },
  confirmButton: {
    backgroundColor: colors.green,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 8,
  },
  confirmButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
});

export default Cart;



