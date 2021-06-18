import * as React from 'react'
import {Text , View , ScrollView  , TouchableOpacity , StyleSheet} from 'react-native'
import db from '../Config'
import firebase from 'firebase'
import {Card} from 'react-native-elements'
import AppHeader from '../components/AppHeader'

export default class ViewItemScreen extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            userId:firebase.auth().currentUser.email,
            itemName:this.props.navigation.getParam('itemDetails')["itemName"],
            reason:this.props.navigation.getParam('itemDetails')["reason"],
            exchangeId:this.props.navigation.getParam('itemDetails')["exchangeId"],
            recieverId:this.props.navigation.getParam('itemDetails')["user_id"],
            recieverName:"",
            contact:"",
            address:"",
            userName:""
        }
    }

    getReceiverDetails=async()=>{
        await db.collection("users").where("email_id","==",this.state.recieverId)
        .get().then((snapShot)=>{
            snapShot.forEach((doc)=>{
              var ReceiverDetails = doc.data()
              this.setState({recieverName: ReceiverDetails.first_name + " " +ReceiverDetails.last_name,
                            contact: ReceiverDetails.contact,
                            address : ReceiverDetails.address})
            })
        })
    }

    addBarters=async()=>{
        await db.collection("my_barters").add({
            "item_name":this.state.itemName,
            "reason":this.state.reason,
            "donor_id":this.state.userId,
            "status":"DONOR INTERESTED",
            "requested_by":this.state.recieverId
        })
    }

    getUserDetails=async()=>{
        await db.collection("users").where("email_id","==",this.state.userId)
        .get().then((response)=>{
            response.forEach((doc)=>{
                var userDetails = doc.data()
                this.setState({userName:userDetails.first_name+" "+userDetails.last_name})
            })
        })
    }

    addNotification=async()=>{
        var message = this.state.userName+" has shown interest in exchanging the item"
        await db.collection("all_notifications").add({
            "item_name":this.state.itemName,
            "donor_id":this.state.userId,
            "targeted_userId":this.state.recieverId,
            "date":firebase.firestore.FieldValue.serverTimestamp(),
            "message":message,
            "status":"unread"
        })
    }

    componentDidMount=()=>{
        this.getReceiverDetails()
        this.getUserDetails()
    }

    render(){
        return(
            <View>
                <AppHeader header="Receiver Details"/>
                <ScrollView>
                <View>
                    <Card>
                        <Card.Title>Item Details</Card.Title>
                        <Card.Divider/>
                        <Card>
                            <Text>Item Name : {this.state.itemName}</Text>
                        </Card>
                        <Card>
                            <Text>Reason : {this.state.reason}</Text>
                        </Card>
                    </Card>
                </View> 
                <View>
                    <Card>
                        <Card.Title>Receiver Details</Card.Title>
                        <Card.Divider/>
                        <Card>
                            <Text> Name : {this.state.recieverName}</Text>
                        </Card>
                        <Card>
                            <Text> Address : {this.state.address}</Text>
                        </Card>
                        <Card>
                            <Text> Contact : {this.state.contact}</Text>
                        </Card>
                    </Card>
                </View>
                <View>
                {this.state.recieverId!=this.state.userId
                    ?(<TouchableOpacity
                    style={styles.button}
                    onPress={()=>{
                        this.addBarters()
                        this.addNotification()
                        this.props.navigation.navigate('MyBarters')}}>
                        <Text style={styles.buttonText}>Exchange This Item</Text>
                    </TouchableOpacity>)
                    :(null)}
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#fff",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
      },
      buttonText:{
        color:'#ff9800',
        fontWeight:'200',
        fontSize:20
      }
})