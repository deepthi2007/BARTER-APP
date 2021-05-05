import {createBottomTabNavigator} from 'react-navigation-tabs'
import ExchangeScreen from '../Screens/ExchangeScreen'
import HomeScreen from '../Screens/HomeScreen'

const TabNavigator = createBottomTabNavigator({
    Home:{screen:HomeScreen},
    Exchange:{screen:ExchangeScreen}
})

export default TabNavigator