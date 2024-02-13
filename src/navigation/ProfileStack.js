import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import Profile from '../screens/Profile';
import ImageSelector from '../screens/ImageSelector';
import LocationSelector from '../screens/LocaltionSelector';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
  
        <Stack.Navigator
        initialRouteName='profile'
        screenOptions={
          ({route})=> {
            return {
              header: () => {
                return <Header title='Perfil'/>
              }
            }
          }
        }>
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="ImageSelector" component={ImageSelector} />
            <Stack.Screen name="LocationSelector" component={LocationSelector} />
        </Stack.Navigator>
    
  )
}

export default ProfileStack

