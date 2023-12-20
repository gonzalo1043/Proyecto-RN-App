import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home.js';
import ItemListCategories from './src/screens/ItemListCategories.js';
import {useFonts} from 'expo-font'
import { StatusBar } from 'expo-status-bar';
import Navigator from './src/navigation/Navigator.js';

export default function App() {

  const [fontLoaded] = useFonts({
    HedvigLetterSerif:require('./assets/fonts/HedvigLettersSerif-Regular-VariableFont_opsz.ttf')
  })
  if (!fontLoaded) return null

  return (
    <>
    <StatusBar/>
    <Navigator/>
    </>
  );
}
const styles = StyleSheet.create({

})



