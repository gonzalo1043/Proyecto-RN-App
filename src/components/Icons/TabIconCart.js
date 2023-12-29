import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const TabIconCart = ({focused}) => {
  return (
    <View style={styles.container}>
        <AntDesign name="shoppingcart" size={24} color={focused ? 'black' : 'grey' } />
        <Text color={focused ? 'black' : 'grey' }>Cart</Text>
    </View>
  )
}

export default TabIconCart

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})