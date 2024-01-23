import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native';
import CartItem from '../components/CartItem';
import { colors } from '../global/colors';
import { useSelector } from 'react-redux';
import { usePostOrdersMutation } from '../app/services/shopServices';

const Cart = () => {
  const cart = useSelector(state => state.cart.value)
  const [triggerPostOrder] = usePostOrdersMutation()

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.footer}>
        <Pressable style={styles.confirmButton} onPress={()=> triggerPostOrder(cart)}>
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </Pressable>
        <Text style={styles.totalText}>Total: $ {cart.total}</Text>
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



