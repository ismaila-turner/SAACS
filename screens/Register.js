import {StyleSheet, View, Text,TextInput,Button,} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import { useState,useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';

import NetInfo from '@react-native-community/netinfo';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { NavigationContainer} from "@react-navigation/native";
import { Value } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';


// import{collection, getDocs, addDoc} from "firebase/firestore"
// import firebase from 'firebase/app';
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
import {auth} from "../firebase"



import {  createUserWithEmailAndPassword } from 'firebase/auth';



// const db = SQLite.openDatabase('nakgambia.db');
export default function Register  ({navigation}) {
  
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
   
    const [nationality, setNationality] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [imageUri, setImageUri] = useState(null);
    const [time, setTime] = useState(new Date());

    function backtologin() {
      navigation.dispatch(StackActions.replace('Login'));
      
      }
   
    

      function afteregis() {
        navigation.dispatch(StackActions.replace('Login'));
      }

      
      const SENDGRID_API_KEY = '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';

      const handleSignup =()=>{
        // Check network connectivity status
        NetInfo.fetch().then(state => {
          if (!state.isConnected) {
            Alert.alert(
              'No Internet Connection',
              'Please connect to the internet',
              [{ text: 'OK', onPress: () => console.log('ok') }],
              { cancelable: false }
            );
            return;
          }
      
          // Check if any of the fields are empty
          if ( !email || !password || !confirmPassword) {
            Alert.alert(
              'Error',
              'All information are required',
              [{ text: 'OK', onPress: () => console.log('OK pressed') }],
              { cancelable: false }
            );
            return;
          }
      
          if (password !== confirmPassword) {
            Alert.alert(
              'Error',
              'Password and confirm password do not match',
              [{ text: 'OK', onPress: () => console.log('password dont match') }],
              { cancelable: false }
            );
            return;
          }
          // Check if email is valid
          if (!email.includes('@') ) {
            Alert.alert(
              'Error',
              'Invalid email address, Email format should be  "example@example.com". ',
              [{ text: 'OK', onPress: () => console.log('Invalid email') }],
              { cancelable: false }
            );
            return;
          }
      
          // Check if password is at least 7 characters long
          if (password.length < 7) {
            Alert.alert(
              'Error',
              'Password must be at least 7 characters long',
              [{ text: 'OK', onPress: () => console.log('Invalid password') }],
              { cancelable: false }
            );
            return;
          }
      
          createUserWithEmailAndPassword(auth,email, password)
            .then((userCredentials) => {

             
              // Do something after creating the user
              const user = userCredentials.user;
              Alert.alert(
                'Success',
                'You have successfully registered. You can now login in',
                [{ text: 'OK', onPress: () => console.log('ok') }],
                { cancelable: false }
              );
              afteregis()

              const msg = {
                personalizations: [
                  {
                    to: [
                      {
                        email: 'ismailatorres@yahoo.com', // Your email address here
                      },
                     
                    ],


                    subject: 'New user registered',
                  },
                ],
                from: {
                  email: 'turnerjavis@hotmail.com', // Your app's email address here
                },
                content: [
                  {
                    type: 'text/plain',
                    value: `A new user with email ${email} has registered to your app.`,
                  },
                ],
              };
           
            
              

              console.log("User created:", user.email);

          


            }
            
            
            )
            .catch((error) => {
              Alert.alert(
                'Error creating user . This account have been registered & already in used',
                error.message,
                [{ text: 'OK', onPress: () => console.log('ok') }],
                { cancelable: false }
              );


              console.error("Error creating user:", error);
            });

          

        });
      }
      


    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);



  return (
    <ScrollView style={styles.container}>
     <View  >
          
      <Text  style={{color:'black',fontSize:20, letterSpacing:-0,  fontWeight:'bold', alignSelf: 'center',margin:15}}>SIGN UP </Text>

 
 
    
      <View style={{backgroundColor:'white',margin:5}}>
{/* <Text style={{color:'black',marginLeft:10}} > Enter FullName
</Text>
  <TextInput  placeholder='Enter FullName ' style={styles.inputstyle}   onChangeText={text => setFullName(text)}/>
  <Text style={{color:'black',marginLeft:10}} > Enter Address
</Text>
  <TextInput placeholder='Enter Address' style={styles.inputstyle}    onChangeText={text => setAddress(text)}   />
  <Text style={{color:'black',marginLeft:10}} > Enter Nationality
</Text>
  <TextInput  placeholder='Enter Nationality'style={styles.inputstyle} onChangeText={text => setNationality(text)}/>
 
  <Text style={{color:'black',marginLeft:10}} > Enter Telephone
</Text>
  <TextInput  placeholder='Enter Telephone'style={styles.inputstyle} onChangeText={text => setTelephone(text)}/> */}

  {/* <Text style={{color:'black',marginLeft:10}} > Enter Email
</Text> */}
  <TextInput  placeholder='Enter Email' style={styles.inputstyle}  value={email} onChangeText={text => setEmail(text)} />

  {/* <Text style={{color:'black',marginLeft:10}} > Enter Password
</Text> */}
<TextInput placeholder='Enter Password'style={styles.inputstyle} value={password}  onChangeText={text => setPassword(text)}/>
{/* 
  <Text style={{color:'black',marginLeft:10}} > Confirm Password
</Text> */}
<TextInput placeholder='Confirm Password'style={styles.inputstyle} value={confirmPassword}   onChangeText={text => setConfirmPassword(text)}/>

</View>
{/* 
<View style={styles.header}>
<Button title="Upload Profile" onPress={handlePickImage} />
        <Image
          style={styles.avatar}
          source={imageUri ? { uri: imageUri } : null}
        />
      
      </View> */}
<View style={styles.buttonstyle}>


  <Button title='Register ' style={{ padding: 50,color:'white' }}  onPress={handleSignup} />
  </View>
  <View style={styles.buttonstyle}>
  <Button title='Already have an account? 'style={{ padding: 50 ,color:'pink'}} onPress={()=> navigation.navigate('Login')}  />
  </View>
  
  <View style={styles.container}>
      <Text   style={{color:'black',fontSize:20,marginTop:200}}  >Deverlop By Turner</Text>
    </View>

 <StatusBar style="auto" />

</View>
</ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    alignSelf: 'center',
 
   
    margin:0,
    marginBottom:50,
    padding:10,
   
   
    


   
  },
  textstyle:{
    margin:10,
    padding: 2,
    fontSize:15,
    
    justifyContent:'center',
     color:'black',
    alignSelf: 'center',
    textTransform:'capitalize',
  },
  header: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },

  avatar: {
    width: 200,
    height: 170,
    borderRadius: 100,
    marginBottom: 20,
  },


  buttonstyle:{
   
    
    margin:5,
    backgroundColor:'lightgreen',
    padding:5,
    borderRadius:20,
   
   
   
     
     
   
  

  },
  inputstyle:{


borderBottomWidth:2.3,
borderBottomColor:'blue',
backgroundColor:'white',

margin:10,

marginLeft:0,
padding:15,
width:330,
alignItems: 'center',
justifyContent: 'center',
marginLeft:10,
borderRadius:10,
fontSize:17


  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    height: 24,
    margin:100,
    
color:'white'
  },
});
