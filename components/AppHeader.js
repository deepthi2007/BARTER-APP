import * as React from 'react'
import {View} from 'react-native'
import {Header} from 'react-native-elements'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class AppHeader extends React.Component{
    render(){
        return(
            <View>
            <SafeAreaProvider>
        <Header
  centerComponent={{ text:this.props.header, style: { color: '#fff' , fontSize:20} }}
  backgroundColor={"#00d0fa"}
/>
</SafeAreaProvider>
</View>
)
    }
}