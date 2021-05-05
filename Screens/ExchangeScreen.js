import * as React from 'react'
import {Text , TextInput , TouchableOpacity , View , StyleSheet} from 'react-native'
import firebase from 'firebase'
import db from '../Config'

export default class ExchangeScreen extends React.Component{
constructor(){
    super()
    this.state={
        itemName:"",
        reason:"",
        userId:firebase.auth().currentUser.email,
        exchangeId:0
    }
}

createExchangeId=()=>{
       this.setState({exchangeId:this.state.exchangeId+1})
}

addExchange=async()=>{
    this.createExchangeId()
    console.log(this.state.exchangeId)
await db.collection("exchange_item").add({
    "user_id":this.state.userId ,
    "itemName":this.state.itemName,
    "reason":this.state.reason,
    "exchange_id":"req"+this.state.exchangeId
})
alert('The new Item is Added') 
//this.props.navigation.navigate('Home')
}

    render(){
        return(
            <View>
                <TextInput
                style={styles.input}
                placeholder="Name of the Item"
                onChangeText={(text)=>{this.setState({itemName:text})}}
                value={this.state.itemName}></TextInput>

                <TextInput 
                style={styles.input}
                placeholder= "Why do you need this Item?"
                onChangeText={(text)=>{this.setState({reason:text})}}
                value={this.state.reason}></TextInput>


                <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addExchange()}}>
                    <Text style={styles.buttonText}>Add Item</Text>
                </TouchableOpacity>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    input:{
        width:"80%",
        height:55,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
    },
    button:{
        width:300,
   height:50,
   justifyContent:'center',
   alignSelf:'center',
   borderRadius:25,
   backgroundColor:"#ff9800",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10,
   marginTop:20
    },
    buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
      }
})