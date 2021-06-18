import * as React from 'react'
import {Text , View , FlatList} from 'react-native'
import {List , Divider } from 'react-native-paper'
import db from '../Config'
import firebase from 'firebase'
import AppHeader from '../components/AppHeader'

export default class MyBarters extends React.Component{

    constructor(){
        super()
        this.state={
            allBarters:[],
            userId:firebase.auth().currentUser.email,
            docId:""
        }
        this.requestref = null
    }

    getMyBarters=async()=>{
        this.requestref = await db.collection("my_barters").where("donor_id","==",this.state.userId)
        .get().then((response)=>{
            response.forEach((doc)=>{
                this.setState({allBarters:doc.data(),
                               docId:doc.id})
            })
        })
    }


    componentDidMount=()=>{
        this.getMyBarters()
    }

    componentWillUnmount=()=>{
        this.requestref
    }

    renderItem=({item,index})=>{
        return(
            <View>
        
            </View>
        )
    }

    render(){
        console.log(this.state.allBarters)
        return(
            <View>
                <AppHeader header="My Barters"/>
                <View>
                    {this.state.allBarters.length===0
                    ?(<Text>No Barters Made Yet</Text>)
                    :(
                        <FlatList
                        data={this.state.allBarters}
                        renderItem={({item,index})=>{
                            return(
                            <View>
                            <List.Item
                            key={index}
                            title={item.item_name}
                            description={item.requested_by}
                            />
                            <Divider/>
                        </View>)
                        }}
                        keyExtractor={(item,index)=>{index.toString()}}
                        ></FlatList>
                        )}
                </View>
            </View>
        )
    }
}