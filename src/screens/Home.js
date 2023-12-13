import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'

const Home = ({setCategorySelected}) => {
    return (
        <>
        <Header title = 'Categorías'/>
        <Categories setCategorySelected = {setCategorySelected}/>
        </>
    )
}

export default Home

const styles = StyleSheet.create({})