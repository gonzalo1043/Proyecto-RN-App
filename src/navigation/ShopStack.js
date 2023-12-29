import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ItemListCategories from '../screens/ItemListCategories.js';
import ItemDetail from '../screens/ItemDetail.js';
import Header from '../components/Header.js';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    
        <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
          ({route})=> {
            return {
              header: () => {
                return <Header title={
                                      route.name === 'Home' ? 'Categorias' :
                                      route.name === 'Category' ? route.params.category :
                                      'Detalle producto' 
                }/>
              }
            }
          }
        }>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Category" component={ItemListCategories} />
            <Stack.Screen name="Product" component={ItemDetail} />
        </Stack.Navigator>
    
  )
}

export default ShopStack

const styles = StyleSheet.create({})