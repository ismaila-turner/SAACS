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


import Icon from 'react-native-vector-icons/Ionicons';

import * as ImagePicker from 'expo-image-picker';



import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

import * as MediaLibrary from 'expo-media-library';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import {firebase} from "../firebase"
import {db} from "../firebase"
import { StackActions } from '@react-navigation/native';


const BookNow=({navigation})=> {
  
  function refreshHomePage() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomePage' }],
    });
  }

    const [propertytitle, setPropertyTitle] = useState('');
    const [status, setPropertyStatus] = useState('');
   
    const [typeofproperty, setTypeofproperty] = useState('');
   
    const [country, setCountry] = useState('');
   
    const [description, setDiscription] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');

    // const countries = [
    //   'Afghanistan',
    //   'Albania',
    //   'Algeria',
    //   // ... and so on
    // ];
    
   


    const data = [
      { label: ' To Buy', value: 'To Buy' },
      { label: 'To Rent', value: ' To Rent' },
      { label: 'To Enquire', value: 'To Enquire' },
    ];

    const data1 = [
      { label: 'house', value: 'house' },
      { label: 'land', value: 'land' },
      { label: 'shop', value: 'shop' },
    ];





    const bookHandle = () => {
      // check if any of the fields are empty
      if (!propertytitle || !typeofproperty || !status || !telephone || !email || !name || !description  || !country) {
        Alert.alert(
          'Error',
          'All information are required',
          [
            { text: 'OK', onPress: () => console.log('OK pressed') },
          ],
          { cancelable: false }
        );
        return;
      }
    
      // check if password and confirmPassword match
      if (telephone.length < 7 ) {
        Alert.alert(
          'Error',
          'number should be more than seven digits',
          [
            { text: 'OK', onPress: () => console.log('number erro') },
          ],
          { cancelable: false }
        );
        return;
      }
    
      // check if email is valid
      if (!email.includes('@')) {
        Alert.alert(
          'Error',
          'Invalid email address',
          [
            { text: 'OK', onPress: () => console.log('Invalid email') },
          ],
          { cancelable: false }
        );
        return;
      }
    
      // Push data to Firebase database
      addDoc(collection(db, "booknow"), {
        propertytitle,
        typeofproperty,
        status,
        country,
        description,
        name,
        email,
       
        telephone,
      
        created_at: new Date().toISOString(),
      }).then(() => {
        Alert.alert(
          'Success',
          'Successfully Submitted.We will get back to you soon via Email or your Phone Number.',
          [
            { text: 'OK' },
          ],
          { cancelable: false }
        );
        // setName('');
        // setEmail('');
        // setPropertyType('');
        // setPrice('');
        // setCountry('');
        // setArea('');
        // setDiscription('');
        // setImages('');
        // setPropertyStatus('');
        // setTelephone('');
        // setPropertyTitle('');
        refresBookNow()
      }).catch((error) => {
        Alert.alert(
          'Error',
          'Error inserting data: ' + error,
          [
            { text: 'OK', onPress: () => console.log('Error inserting data') },
          ],
          { cancelable: false }
        );
      });
    };
  
    function refresBookNow() {
      navigation.dispatch(StackActions.replace('BookNow'));
      
      }

  return (

    <View style={styles.container} >
    <ScrollView style={styles.container}>
       
     <View style={{}} >
     <Text  style={{fontSize:20, textAlign:'center', fontWeight:'bold', margin:10, backgroundColor:'grey',padding:10, height:60}} >
           Book Now OR Submit Enquiry 
            </Text> 

<Text style={{padding:10, margin:10,textAlign:'left' , width:350}}  >
Please fill out the form below.

</Text>
<Text style={{margin:10, fontWeight:'bold'}}>
Basic Information!
</Text>



<Text style={{color:'black',marginLeft:22}} >Property Title
</Text>
  <TextInput  placeholder='Enter Property Title You Are Interested in  ' style={styles.dropdown} value={propertytitle}    onChangeText={text => setPropertyTitle(text)}/>
 





  <Text style={{color:'black',marginLeft:18}} >Type of Property</Text>

  <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data1}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Porperty Type"
        searchPlaceholder="Search..."
        value={typeofproperty}
        onChange={item => {
          setTypeofproperty(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
    
      />



<Text style={{color:'black',marginLeft:18}} >Reason For Booking  </Text>

<Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select "
      searchPlaceholder="Search..."
      value={status}
      onChange={item => {
        setPropertyStatus(item.value);
      }}
      renderLeftIcon={() => (
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      )}
  
    />




 


  <Text style={{color:'black',marginLeft:18}} >Current Country
</Text>
  <TextInput  placeholder='Enter Country' style={styles.dropdown}  value={country}      onChangeText={text => setCountry(text)} />

  

  <Text style={{color:'black',marginLeft:18, margin:20}} > Message You Might want to ask 
</Text>
<TextInput placeholder='Confirm Discription'style={{height: 100, borderColor: 'gray', borderWidth: 1}    }
 multiline={true}
 numberOfLines={4}
onChangeText={text => setDiscription(text)}  value={description}  />


{/*  here come the uplaod image */}



<View>

  <Text style={{fontWeight:'bold',textAlign:'center', margin:15, padding:10}}   >  Contact Details</Text>


  <Text style={{color:'black',marginLeft:18}} > Name
</Text>
  <TextInput  placeholder='Enter YourName'style={styles.dropdown} onChangeText={text => setName(text)} value={name}  />

  <Text style={{color:'black',marginLeft:18}} > Email(please put in correct email for quick respond)
</Text>
  <TextInput  placeholder='Enter Email'style={styles.dropdown} onChangeText={text => setEmail(text)} value={email}  />


  
  <Text style={{color:'black',marginLeft:18}} > Phone Number
</Text>
  <TextInput  placeholder='Enter Phone eg:+220243456'style={styles.dropdown} onChangeText={text => setTelephone(text)}  value={telephone}  />

</View>

<View style={styles.buttonstyle}>


  <Button title='Submit ' style={{ padding: 70,margin:40 }}  onPress={bookHandle}   />
 
  </View>

  





</View   >

</ScrollView>

<ScrollView horizontal={true} style={{alignSelf:'center'}}  >
<View   style={{ fontSize:7,   alignSelf: 'center',fontWeight:'bold',margin:0, color:'black', flexDirection:'row',height:'120%',backgroundColor:'white'}}  >

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

     
  paddingHorizontal:0,
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
      backgroundColor:'white',
      padding:5,
      borderRadius:20,
      paddingBottom:260,
     
     
       
       
     
    
  
    },
    inputstyle:{
  
  
 
 
shadowColor:'black',
shadowOpacity:0.5,
elevation:3,
shadowOffset:{width:5,height:5},
padding:15,
  borderWidth:0.5, 
  backgroundColor:'white',

  margin:10,
  
  marginLeft:0,
  padding:19,
  width:345,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius:15,
  
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
    dropdown: {
      margin: 16,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.9,
      shadowRadius: 1.41,

      elevation: 6,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },




  });
;


export default BookNow