import { FlatList, StyleSheet} from 'react-native'
import Search from '../components/Search'
import VinylItem from '../components/VinylItem'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import { useGetProductsQuery } from '../app/services/shopServices'

const ItemListCategories = ({navigation, route}) => {
  const {category} = route.params
  const {data, isLoading} = useGetProductsQuery(category)
  const [keyword, setKeyword] = useState('')
  const [vinyls, setVinyls] = useState()

  useEffect(() => {
    if (!isLoading) {

      const products = Object.values(data)
      const vinylsFiltered = products.filter( v => v.title.includes(keyword))
      setVinyls(vinylsFiltered)
    }
  }, [keyword, data])

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

