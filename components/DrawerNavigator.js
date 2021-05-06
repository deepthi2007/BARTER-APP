import * as React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import TabNavigator from './TabNavigator'
import CustomSideBar from './customSideBar'

 const DrawerNavigator = createDrawerNavigator({
    Home:{screen:TabNavigator}
}, {
    contentComponent:CustomSideBar
}, {
    initialRouteName:'Home'
})

export default DrawerNavigator