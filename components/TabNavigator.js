import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from '../Screens/HomeScreen'
import StackNavigator from './StackNavigator'

const TabNavigator = createBottomTabNavigator({
    Home:{screen:HomeScreen},
    Exchange:{screen:StackNavigator}
})

export default TabNavigator