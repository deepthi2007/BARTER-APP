import * as React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import ViewItemScreen from '../Screens/ViewItemScreen'
import HomeScreen from '../Screens/HomeScreen'
import MyBarters from '../Screens/MyBarters'

const StackNavigator = createStackNavigator({
    Home : {screen:HomeScreen , navigationOptions:{headerShown:false}},
    ViewItem : {screen:ViewItemScreen , navigationOptions:{headerShown:false}},
    MyBarters : {screen : MyBarters , navigationOptions:{headerShown:false}}
})

export default StackNavigator