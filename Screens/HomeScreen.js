

import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { List,Divider } from 'react-native-paper'
import db from '../Config'
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends Component{
  constructor(){
    super()
    this.state = {
      allRequests : []
    }
  this.requestRef= null
  }

  getAllRequests =()=>{
    this.requestRef = db.collection("exchange_item")
    .onSnapshot((snapshot)=>{
      var allRequests = []
      snapshot.forEach((doc) => {
          allRequests.push(doc.data())
      })
      console.log(allRequests)
      this.setState({allRequests:allRequests})
    })
  }

  keyExtractor = (item, index) => {
      index.toString();
                }

  renderItem = ( {item, i} ) =>{

    return (
        <View>
          <View>
      <List.Item
        key={i}
        title={"Item : "+item.itemName}
        description={"Reason : "+item.reason}
         />
      <TouchableOpacity 
      style={styles.button}
      onPress={()=>{this.props.navigation.navigate('ViewItem',{itemDetails:item})}}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
         </View>
         <View>
      <Divider style={{color:"blue"}}/>
      </View>
      </View>
    )
  }

  componentDidMount(){
    this.getAllRequests()
  }

  componentWillUnmount(){
    this.requestRef();
  }

  render(){
    return(
      <View style={{flex:1}}>
       <AppHeader header="Home"/>
        <View style={{flex:1}}>
          {
            this.state.allRequests.length === 0
            ?(
              <View style={{flex:1, fontSize: 20, justifyContent:'center', alignItems:'center'}}>
                <Text style={{ fontSize: 20}}>List of all Barter</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.allRequests}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignSelf:"center",
    borderRadius:25,
    backgroundColor:"#1400f5",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20,
    textAlign:"center",
    textAlignVertical:"center"
  }
})


