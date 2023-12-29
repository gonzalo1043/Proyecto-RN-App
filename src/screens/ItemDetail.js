import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'


const ItemDetail = ({route}) => {

const vinyl = useSelector((state) => state.shop.value.productSelected)

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: vinyl.thumbnail }}
        resizeMode="cover"
        style={styles.image}
      />

      <Text style={styles.title}>{vinyl.title}</Text>
      <Text style={styles.description}>{vinyl.description}</Text>
      <Text style={styles.price}>${vinyl.price}</Text>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color:'white'
  },
  description: {
    fontSize: 18,
    color: "#333333",
    marginBottom: 16,
    textAlign: "center",
    color:'white',
    paddingHorizontal: 5

  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.greenLime
  },

})