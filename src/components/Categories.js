import { FlatList, StyleSheet, Text, View } from 'react-native'
import categories from "../data/categories.json"
import CategoryItem from './CategoryItem'
import { colors } from '../global/colors'

const Categories = ({navigation, route}) => {
return (
    <View style= {styles.background}>
        <FlatList
    style= {styles.container}
    data= {categories}
    keyExtractor= {item => item}
    renderItem = {({item}) => <CategoryItem 
                                            navigation = {navigation}                               
                                            category = {item}
                                            route={route}
                                            />}
    />
    </View>
    
)
}

export default Categories

const styles = StyleSheet.create({
    background : {
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: 30
    },
    container: {
        width: '100%',
    }
})