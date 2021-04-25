import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/loginScreen';

export default class App extends React.Component {
  render(){
    return(
      <View>
        <LoginScreen/>
      </View>
    )
  }
}

