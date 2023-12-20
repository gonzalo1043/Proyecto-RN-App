import { Pressable, StyleSheet, Text, View } from 'react-native'
import {colors} from '../global/colors'
import CardShadow from '../wrapper/CardShadow'

const CategoryItem = ({category, navigation, route}) => {

    
    return (
        <Pressable onPress={() => navigation.navigate('Category', {category})}>
            <CardShadow style={styles.container}>
                <Text>{category}</Text>
            </CardShadow>
        </Pressable>
    )
}

export default CategoryItem

const styles = StyleSheet.create({  
    container: {
    width: '80%',
    backgroundColor: colors.greenLime,
    margin: 5,
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20
},
})