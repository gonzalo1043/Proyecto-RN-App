import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const CardShadow = ({children, style}) => {
  return (
    <View style= {{...styles.container, ...style}}>
        {children}
    </View>
  )
}

export default CardShadow

const styles = StyleSheet.create({
    container: {
        elevation: 10,
    //IOS
    shadowColor: colors.orange,
    shadowOffset: {
        height:5,
        width:3
    },
    shadowOpacity: 1 ,
    shadowRadius:1
    }
})