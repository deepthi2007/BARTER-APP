import React from 'react';
import { View } from 'react-native';
import LoginScreen from './Screens/loginScreen';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import DrawerNavigator from './components/DrawerNavigator';

export default class App extends React.Component {
  render(){
    return(
        <AppContainer/>
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  Login:{screen:LoginScreen},
  DraqwerNavigator:{screen:DrawerNavigator}
  })
  
  const AppContainer = createAppContainer(SwitchNavigator)
  
  

