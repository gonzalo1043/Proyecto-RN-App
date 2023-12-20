import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../components/Header'
import Search from '../components/Search'
import allVinyls from '../data/vinyls.json'
import VinylItem from '../components/VinylItem'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'


const ItemListCategories = ({navigation, route}) => {

  const {category} = route.params
  
  const [keyword, setKeyword] = useState('')
  const [vinyls, setVinyls] = useState(allVinyls)

  useEffect(() => {
    if(category) {
      const vinylsCategory = allVinyls.filter( v => v.category === category)
      const vinylsFiltered = vinylsCategory.filter( v => v.title.includes(keyword))
    setVinyls(vinylsFiltered)
    } else {
      const vinylsFiltered = allVinyls.filter( v => v.title.includes(keyword))
    setVinyls(vinylsFiltered)
    }
  }, [keyword])

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