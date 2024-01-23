import { StyleSheet, View } from 'react-native';
import {useFonts} from 'expo-font'
import { StatusBar } from 'expo-status-bar';
import { store } from './src/app/store.js'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigation/MainNavigator.js';

export default function App() {

  const [fontLoaded] = useFonts({
    HedvigLetterSerif:require('./assets/fonts/HedvigLettersSerif-Regular-VariableFont_opsz.ttf')
  })
  if (!fontLoaded) return null

  return (
    <>
    <StatusBar/>
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
    </>
  );
}
const styles = StyleSheet.create({

})



