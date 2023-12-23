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





const Legal=({navigation})=> {
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
        <Text  style={{fontSize:25, textAlign:'center', fontWeight:'bold', margin:10, backgroundColor:'blue', color:'white' , padding:10, height:60}} >
           Read The Legal Policies
            </Text> 

            <Text  style={{fontSize:18, padding:10, textAlign:"center",margin:10}}  >
            The following ("Terms and Conditions") govern your use of this mobile application ("App") and all services provided by Nek Gambia . By using the App, you agree to be bound by these Terms and Conditions, our Privacy Policy, and any additional terms that may apply to specific sections of the App or to products and services available through the App or from Company. If you do not agree to these terms, please do not use the App..          
            <Text style={{color:'blue', fontWeight: 'bold', margin:20, fontSize:19}}>                       Intellectual Property  </Text>

            The App and all content and materials included on the App, such as text, graphics, logos, images, and software, are the property of Company or its licensors and protected by copyright and trademark laws. The compilation of all content on the App is the exclusive property of Company and protected by copyright and trademark laws. Any unauthorized use of the content or materials on the App is strictly prohibited.

  <Text style={{color:'blue', fontWeight: 'bold', margin:20, fontSize:19}}>                                              Use of the App                                                       </Text>

  You may use the App for personal, non-commercial use only. You may not use
   the App for any illegal or unauthorized purpose. You agree to comply with all laws,
    rules and regulations applicable to your use of the App and your Content (as defined below), 
    including but not limited to, copyright laws.

<Text style={{color:'blue', fontWeight: 'bold', margin:20, fontSize:19}}>                                  User Submissions                                                                                             </Text>

The App may allow users to submit, post or otherwise make available content, comments or other materials on or 
through the App ("User Submissions"). You understand that whether or not such User Submissions are published, Company 
does not guarantee any confidentiality with respect to any User Submissions. You shall be solely responsible for your own 
User Submissions and the consequences of posting or publishing them. By submitting, posting or otherwise making available a
ny User Submissions, you grant Company a worldwide, perpetual, non-exclusive, royalty-free, sublicensable and transferable license to use, reproduce, distribute, prepare derivative works of, display, perform, and otherwise fully exploit the User Submissions in connection with the App and Company's (and its successors' and assigns') business, including without limitation for promoting and redistributing part or all of the App (and derivative works thereof) in any media formats and through any media channels. You also hereby grant each user of the App a non-exclusive license to access your User Submissions through the App, and to use, reproduce, distribute, display and perform such U
ser Submissions as permitted through the functionality of the App and under these Terms and Conditions.

<Text style={{color:'blue', fontWeight: 'bold', margin:20, fontSize:19}}>                             Third-Party Websites and Content                                                 </Text>

The App may contain links to third-party websites or services that are not owned or controlled by Company. 
Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of 
any third-party websites or services. You further acknowledge and agree that Company shall not be responsible or liable, 
directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on 
any such content, goods or services available on or through any such websites or services. We strongly advise you to rea
d the terms and conditions and privacy policies of any third-party websites or services that you visit.

<Text style={{color:'blue', fontWeight: 'bold', margin:20, fontSize:19}}>                                               Termination                                                                                      </Text>

Company reserves the right, in its sole discretion, to terminate your access to the App or any portion thereof at any time and 
for any reason, without notice and without liability to you or any third party.

<Text style={{color:'blue', fontWeight: 'bold', margin:20, fontSize:19}}>                                                               Disclaimer of Warranties                                  </Text>

YOUR USE OF THE APP IS AT YOUR SOLE RISK. THE APP AND ALL CONTENT AND MATERIALS INCLUDED ON THE APP ARE 
PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.  



If you have any questions or concerns about our Privacy Policy or our handling of your personal information, please contact us .

By using our app and services, you consent to the collection, use, and sharing of your personal information as described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use our website or services.
 </Text> 
 
</View   >

</ScrollView>
<ScrollView horizontal={true}   >
<View   style={{ fontSize:10,   alignSelf: 'center',fontWeight:'bold',margin:10, color:'black', flexDirection:'row',height:'120%',backgroundColor:'white'}}  >
<TouchableOpacity style={styles.buttonmenustyle}    onPress={refreshHomePage} >
     
      <Icon    style={{   alignSelf: 'center'}}   name="home" size={22} color="blue" />
      <Text   style={{   textAlign: 'center', fontWeight:'bold', fontSize:12}}    >Home</Text>
    </TouchableOpacity    >
    {/* Render a list of available properties here */}
    <TouchableOpacity style={styles.buttonmenustyle}   onPress={()=>navigation.push('Search')}  >
    <Icon    style={{   alignSelf: 'center'}}   name="ios-search" size={22} color="blue" />
      <Text  style={{   textAlign: 'center' , fontWeight:'bold' , fontSize:12}} >Search</Text>
    </TouchableOpacity>
    {/* Render a list of popular properties here */}
    <TouchableOpacity style={styles.buttonmenustyle} >
    <Icon    style={{   alignSelf: 'center'}}   name="ios-people" size={22} color="blue" />
      <Text style={{   textAlign: 'center', fontWeight:'bold', fontSize:12}}  >Peoploe</Text>
    </TouchableOpacity>
    {/* Render a location filter component here */}

    <TouchableOpacity style={styles.buttonmenustyle}  onPress={()=>navigation.push('Profile')} >
    <Icon    style={{   alignSelf: 'center', fontWeight:'bold'}}   name="ios-person" size={22} color="blue" />
      <Text  style={{   textAlign: 'center', fontWeight:'bold' , fontSize:12}} >Profile</Text>
    </TouchableOpacity>
    {/* Render a price filter component here */}
  
   
    <TouchableOpacity style={styles.buttonmenustyle}  onPress={()=>navigation.push('Settings')} >
    <Icon    style={{   alignSelf: 'center', fontWeight:'bold'}}   name="ios-settings" size={22} color="blue" />
      <Text  style={{   textAlign: 'center', fontWeight:'bold' , fontSize:12}} >Settings</Text>
    </TouchableOpacity>
    {/* Render a price filter component here */}
  
   
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
  
  
 
 
shadowColor:'black',
shadowOpacity:0.5,
elevation:3,
shadowOffset:{width:5,height:5},
padding:15,
  borderWidth:0.5, 
  backgroundColor:'white',
borderBottomColor:'blue',
  margin:10,
  
  marginLeft:16,
  padding:15,
  width:335,
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


export default Legal