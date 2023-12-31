import {StyleSheet, View, Text,TextInput,Button, Dimensions} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import { NavigationContainer} from "@react-navigation/native";
import Animated,{useSharedValue, useAnimatedStyle, sub} from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/Ionicons';

import  {useEffect } from 'react';

import { StackActions } from '@react-navigation/native';
import { getDatabase, ref, push, onValue } from 'firebase/database';

import { initializeApp } from 'firebase/app';

import {db} from "../firebase"
import {firebase} from "../firebase"
import { getFirestore, collection, addDoc } from 'firebase/firestore';

 // import compat module
import 'firebase/database'; // import compat module
import 'firebase/auth'; // import compat module

const Contact = ({ navigation }) => {

  // const collectionRef = db.collection('contact');



  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");

  const handleNameChange = (name) => {
    setName(name);
  }

  const handleEmailChange = (email) => {
    setEmail(email);
  }

  const handleSubjectChange = (subject) => {
    setSubject(subject);
  }

  const handleMessageChange = (message) => {
    setMessage(message);
  }
  const insertData = (e) => {
        if (!name || !email || !subject || !message) {
      alert('All fields are required!.');
      return;
    }
    e.preventDefault();
  
    addDoc(collection(db, "contact"), {
      name: name,
      email: email,
      subject: subject,
      message: message,
      created_at: new Date().toISOString(),
    })
      .then(() => {
        alert("Message has been submitted.we will get back to you soon ");
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        alert(error.message);
      });
  };


  function refresReport() {
    navigation.dispatch(StackActions.replace('Contact'));
    
    }

   
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  
 


  // rest of your component code here


function refreshHomePage() {
  navigation.reset({
    index: 0,
    routes: [{ name: 'HomePage' }],
  });
}

  return (

    <View style={styles.container} >
    <ScrollView style={styles.container}>
       
     <View  >
     <Text  style={{fontSize:25, textAlign:'center', fontWeight:'bold', margin:10, backgroundColor:'grey',padding:10, height:60}} >
            Contact US
            </Text> 

<Text style={{fontSize:17,padding:10, margin:10,textAlign:'left' , width:350}}  >

</Text>

{/* <TextInput  placeholder='Enter Name' style={styles.inputstyle} onChangeText={text => setName(text)} /> */}

  

<TextInput  placeholder='Enter Name' style={styles.inputstyle} value={name}  onChangeText={text => setName(text)} />

<TextInput style={styles.inputstyle}
        placeholder="Email" value={email} 
      
        onChangeText={text => setEmail(text)}
      />


      <TextInput style={styles.inputstyle}
        placeholder="Subject" value={subject} 
        
        onChangeText={text => setSubject(text)}
      />
   


<TextInput placeholder=' Message'style={{height: 150, borderColor: 'gray', borderWidth: 1,  shadowColor:'black',
fontSize:17,
  shadowOpacity:0.5,
  elevation:3,
  shadowOffset:{width:5,height:5},
  padding:18,
    borderWidth:0.5, 
    backgroundColor:'white',
  borderBottomColor:'blue',
    margin:19,
    width:319,
    marginLeft:20, }    }
 multiline={true}
 numberOfLines={4}
 value={message} 
onChangeText={text => setMessage(text)}/>

      <Button title="Submit" onPress={insertData} />

      {/* <Button     title='dispaly users '    style={{ padding: 10 ,color:'pink'}} onPress={displayData} /> */}

      <Text style={{margin:15, marginTop:50, fontSize:20, fontWeight:'bold'}}>
    Call Us NOW OR Send Us Email!
</Text>
<Text style={{margin:5, fontSize:15, fontWeight:'bold'}} >
   Telephone: +220 3746077 / 2822025
</Text>
<Text style={{margin:10,fontSize:15, fontWeight:'bold',paddingBottom:100}}>
  Email: saacs1111@gmail.com
</Text>


</View   >

</ScrollView>

<ScrollView horizontal={true} style={{alignSelf:'center'}}  >
<View   style={{ fontSize:7,   alignSelf: 'center',fontWeight:'bold',margin:5, color:'black', flexDirection:'row',height:'120%',backgroundColor:'white'}}  >

<TouchableOpacity style={styles.buttonmenustyle}  onPress={refreshHomePage}  >

      <Icon    style={{   alignSelf: 'center'}}   name="home" size={20} color="blue" />
      <Text   style={{   textAlign: 'center', fontWeight:'bold', fontSize:12}}  >Home</Text>
    </TouchableOpacity    >
    {/* Render a list of available properties here */}
 
    <TouchableOpacity style={styles.buttonmenustyle}   onPress={()=>navigation.push('Search')}  >
    <Icon    style={{   alignSelf: 'center'}}   name="ios-search" size={20} color="blue" />
      <Text  style={{   textAlign: 'center' , fontWeight:'bold' , fontSize:12}} >Search</Text>
    </TouchableOpacity>
    {/* Render a list of popular properties here */}
    <TouchableOpacity style={styles.buttonmenustyle} onPress={()=>navigation.push('BookNow')}>
   <Icon style={{alignSelf: 'center'}} name="book" size={30} color="blue" />
  <Text style={{textAlign: 'center', fontWeight:'bold', fontSize:12}}>BOOK NOW</Text>
   </TouchableOpacity>
    {/* Render a location filter component here */}

    <TouchableOpacity style={styles.buttonmenustyle}  onPress={()=>navigation.push('Profile')} >
    <Icon    style={{   alignSelf: 'center', fontWeight:'bold'}}   name="ios-person" size={20} color="blue" />
      <Text  style={{   textAlign: 'center', fontWeight:'bold' , fontSize:12}} >Profile</Text>
    </TouchableOpacity>
    {/* Render a price filter component here */}
  
   
    <TouchableOpacity style={styles.buttonmenustyle}   onPress={()=>navigation.push('Settings')}  >
    <Icon    style={{   alignSelf: 'center', fontWeight:'bold'}}   name="ios-settings" size={20} color="blue" />
      <Text  style={{   textAlign: 'center', fontWeight:'bold' , fontSize:12}} >Settings</Text>
    </TouchableOpacity>
  </View>
  </ScrollView>
 



</View>
  )
}


const styles = StyleSheet.create({
    container: {
     height:'100%',
   margin:0,

     

paddingBottom:20,

     
    alignSelf: 'center',
   textAlign:'center',
     
      backgroundColor: 'white',
     
  
  
  
     
    },facility:{
flexDirection:'row',
marginRight:15,
textAlign:'center',

    },
    facilitytext:{
marginLeft:5,
    color:'grey',
    
    },
card:{
height:400,
backgroundColor:'white',
elevation:10,
shadowColor:'grey',

width: 340, marginRight:0,
marginLeft:-10,
borderRadius:20,
margin:5

},
menucontainer:{
    marginTop:'30',
    alignItems:'center',
  
  justifyContent: 'flex-end', padding: 0, 
  flexDirection:'row',
  
  justifyContent:'space-between',
  borderTopColor:'black',

  textTransform:'uppercase',
margin:5,
   borderInStyle: 'solid',
borderColor:'black',
borderColor: 'black', borderStyle: 'solid' ,

textTransform:'uppercase',


bottom:0,
left: 0,
right: 0,


},


topmenu:{
 

  justifyContent: 'flex-end', padding: 0, 
  flexDirection:'row',
  
  justifyContent:'space-between',
  borderTopColor:'black',

  textTransform:'uppercase',
margin:4,
   borderInStyle: 'solid',
borderColor:'black',
borderColor: 'black', borderStyle: 'solid' ,

textTransform:'uppercase',
fontWeight:'bold',

bottom:0,
left: 0,
right: 0,


},

topmenustyle:{
  textTransform:'capitalize',
  textTransform:'uppercase',
  fontWeight:'bold',
  fontSize:20,
    borderInStyle: 'solid',
    borderBottomWidth:0,
    borderRightWidth:0,
    
    borderColor:'black',
    borderWidth: 0, borderColor: 'black', borderStyle: 'solid' ,
  borderRadius:5,
  margin:5,
  padding:7,
  backgroundColor:'white',
  fontWeight:'bold',
  shadowColor:'blue',
  shadowOpacity:6,
  elevation:3,
  shadowOffset:{width:5,height:5},
  color:'white'






},
buttonmenustyle:{
  
  textTransform:'uppercase',
fontWeight:'bold',
fontSize:22,
  borderInStyle: 'solid',
  borderBottomWidth:0,
  borderRightWidth:1,
  borderColor:'black',
  borderWidth: 0, borderColor: 'black', borderStyle: 'solid' ,
borderRadius:10,
margin:10,
alignSelf:'center',
padding:2,
backgroundColor:'white',
fontWeight:'bold',
shadowColor:'black',
shadowOpacity:7,
elevation:3,
shadowOffset:{width:5,height:10},
color:'white'





},

menubuttonstyle:{
  
  textTransform:'uppercase',

  borderInStyle: 'solid',
  borderColor:'black',
  borderWidth: 2, borderColor: 'black', borderStyle: 'solid' ,

padding:10,
backgroundColor:'white',
flex: 0, 
bottom:0,
fontWeight:'bold'




},

    textstyle:{
      margin:20,
      padding: 5,
      fontSize:15,
     
      
      justifyContent:'center',
       color:'white',
      alignSelf: 'center',
      textTransform:'capitalize',
    },
    buttonstyle:{
     
      
      margin:5,
      backgroundColor:'lightgreen',
      padding:5,
      borderRadius:20,
     
     
     
       
       
     
    
  
    },
    inputstyle:{
  
  fontSize:18,
 
 
shadowColor:'black',
shadowOpacity:0.5,
elevation:3,
shadowOffset:{width:5,height:5},
padding:15,
  borderWidth:0.5, 
  backgroundColor:'white',
borderBottomColor:'blue',
  margin:10,
  marginTop:20,

  padding:15,
  width:330,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius:20,
  
  color:'black'
  
  
    },
    footer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 10,
      height: 24,
      margin:0,
      
  color:'white'
    },





  });
;


export default Contact