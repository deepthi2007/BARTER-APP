import * as React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import TabNavigator from './TabNavigator'
import CustomSideBar from './customSideBar'
import UpdateProfileScreen from '../Screens/updateProfileScreen'
import MyBarters from '../Screens/MyBarters'

 const DrawerNavigator = createDrawerNavigator({
    Home:{screen:TabNavigator},
    UpdateYourProfile:{screen:UpdateProfileScreen},
    MyBarters : {screen:MyBarters}
}, {
    contentComponent:CustomSideBar
}, {
    initialRouteName:'Home'
})

export default DrawerNavigator