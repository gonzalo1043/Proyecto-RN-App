import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

const TabIconProfile = ({focused}) => {
  return (
    <View style={styles.container}>
        <Feather name="user" size={24} color={focused ? 'black' : 'grey' } />
        <Text color={focused ? 'black' : 'grey' }>Profile</Text>
    </View>
  )
}

export default TabIconProfile

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },})