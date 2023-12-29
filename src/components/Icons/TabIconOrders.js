import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

const TabIconOrders = ({focused}) => {
  return (
    <View style={styles.container}>
        <Feather name="shopping-bag" size={24} color={focused ? 'black' : 'grey' } />
        <Text color={focused ? 'black' : 'grey' }>Ordenes</Text>
    </View>
  )
}

export default TabIconOrders

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },})