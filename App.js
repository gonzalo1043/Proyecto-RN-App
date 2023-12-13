import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home.js';
import ItemListCategories from './src/screens/ItemListCategories.js';
import {useFonts} from 'expo-font'

export default function App() {

  const [categorySelected, setCategorySelected] = useState('')
  const [fontLoaded] = useFonts({
    HedvigLetterSerif:require('./assets/fonts/HedvigLettersSerif-Regular-VariableFont_opsz.ttf')
  })

  return (
    <>
    {categorySelected ? <ItemListCategories category = {categorySelected}/> : <Home setCategorySelected={setCategorySelected}/>}
    </>
  );
}
const styles = StyleSheet.create({

})



