import React from 'react';
import { View } from 'react-native';
import LoginScreen from './Screens/loginScreen';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import TabNavigator from './components/TabNavigator';

export default class App extends React.Component {
  render(){
    return(
        <AppContainer/>
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  Login:{screen:LoginScreen},
  TabNavigator:{screen:TabNavigator}
  })
  
  const AppContainer = createAppContainer(SwitchNavigator)
  
  

