import { StyleSheet, Text, View } from 'react-native'
import {colors} from '../global/colors.js'

const Header = ({title = 'VV VYNIL'}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.orange,
        width: '100%',
        height: 80,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    text: {
        paddingTop: 25,
        fontSize: 35,
        fontFamily: 'HedvigLetterSerif',
        color: colors.black
    }
})
