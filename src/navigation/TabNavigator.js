import { StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import OrdersStack from './OrdersStack';
import TabIconOrders from '../components/Icons/TabIconOrders';
import TabIconCart from '../components/Icons/TabIconCart';
import TabIconShop from '../components/Icons/TabIconShop';
import { colors } from '../global/colors';
import ProfileStack from './ProfileStack';
import TabIconProfile from '../components/Icons/TabIconProfile';




const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
          <Tab.Navigator
            screenOptions={{
              headerShown:false,
              tabBarShowLabel:false,
              tabBarStyle: styles.tabbar
              }}>
            <Tab.Screen 
              name="Shop" 
              component={ShopStack}
              options={{
                tabBarIcon: ({focused}) => <TabIconShop focused= {focused}/>
            }} />
            <Tab.Screen 
              name="Cart" 
              component={CartStack}
              options={{
                tabBarIcon: ({focused}) => <TabIconCart focused= {focused}/>
              }} />
              <Tab.Screen 
              name="Orders" 
              component={OrdersStack}
              options={{
                tabBarIcon: ({focused}) => <TabIconOrders focused= {focused}/>
              }} />
              <Tab.Screen 
              name="Profile" 
              component={ProfileStack}
              options={{
                tabBarIcon: ({focused}) => <TabIconProfile focused= {focused}/>
              }} />
          </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: colors.orange,
    elevation: 4,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
    paddingTop: 30
  }
})