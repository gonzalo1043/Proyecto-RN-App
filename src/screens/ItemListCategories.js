import { FlatList, StyleSheet} from 'react-native'
import Search from '../components/Search'
import VinylItem from '../components/VinylItem'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import { useDispatch, useSelector } from 'react-redux'

const ItemListCategories = ({navigation, route}) => {

  const productsFilteredByCategory = useSelector(state => state.shop.value.productsFilteredByCategory)
  const [keyword, setKeyword] = useState('')
  const [vinyls, setVinyls] = useState([])

  useEffect(() => {
      const vinylsFiltered = productsFilteredByCategory.filter( v => v.title.includes(keyword))
    setVinyls(vinylsFiltered)
  }, [keyword, productsFilteredByCategory])

  return (
    <>
    <Search setKeyword = {setKeyword}/>
    <FlatList
    style = {styles.container}
    data = {vinyls}
    keyExtractor = {item => item.id}
    renderItem={({item}) => <VinylItem
                                      item = {item}
                                      navigation = {navigation}
                                      />}
    />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.black
  }
})