import { StyleSheet, Text, Pressable, Image } from 'react-native'
import { colors } from '../global/colors'
import { useDispatch } from 'react-redux'
import { setProductSelected } from '../features/shop/shopSlice'

const VinylItem = ({item, navigation}) => {

  const dispatch = useDispatch()

  return (
    <Pressable style= {styles.container} onPress={() => {
      dispatch(setProductSelected(item.id))
      navigation.navigate("Product", { id: item.id })
      } }>
        <Image
        style= {styles.image}
        resizeMode='cover'
        source = {{uri: item.thumbnail}}
        />
        <Text style= {styles.text}>{item.title}</Text>
    </Pressable>
  )
}

export default VinylItem

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        backgroundColor: colors.greenLime,
        margin: 10, 
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'start',
        gap: 20
    
    },
    image: {
        width: 200,
        height: 200
    },
    text: {
      fontSize: 20,
      fontFamily: 'HedvigLetterSerif',
      color: colors.black
    }
})