import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { List,Divider } from 'react-native-paper'
import db from '../config'
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
      console.log(item)
                }

  renderItem = ( {item, i} ) =>{

    return (
        <View>
      <List.Item
        key={i}
        title={"Item : "+item.itemName}
        description={"Reason : "+item.reason}
         />
      <Divider style={{color:"blue"}}/>
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
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})


