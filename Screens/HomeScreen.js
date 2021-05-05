import * as React from 'react'
import {Text , View , FlatList } from 'react-native'
import db from '../Config'
import firebase from 'firebase'
import {ListItem } from 'react-native-elements'
import {List} from 'react-native-paper';
export default class HomeScreen extends React.Component{

constructor(){
    super()
    this.state={
        userId:firebase.auth().currentUser.email,
        allItems:[]
    }
    this.requestRef=null;
}

getItems=async()=>{
  this.requestRef= db.collection("exchange_item")
  .onSnapshot((snapShot)=>{
      var Requests =null;
       snapShot.docs.map((doc,index)=>{
      Requests = doc.data()
      console.log("Each document   "+ doc.data())   
      })
      console.log(Requests)
     
  })
  this.setState({allItems:Requests})

}

renderItem=({item,i})=>{
    return(
        
       <List.Item 
       key={i}
       title={item.itemName}
       description={item.reason}
       bottomDivider
       />
    )
}
keyExtractor = (item, index) => {
    index.toString();
    console.log(item);
  };

componentDidMount=()=>{
    this.getItems()
    console.log(this.state.allItems)
}
componentWillUnmount=()=>{
    this.requestRef();
}

    render(){
        return(
            <View>
            {this.state.allItems.length===0
            ?(<Text>No Records Found</Text>)
        :(
                <FlatList
                data={this.state.allItems}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}></FlatList>
        )}
        </View>
        ) 
    }
}