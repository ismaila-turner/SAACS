import {StyleSheet, View, Text,TextInput,Button,ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo';
import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import { NavigationContainer} from "@react-navigation/native";
// import * as Google from 'expo-google-app-auth';

import { FontAwesome } from 'react-native-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {auth} from "../firebase"

import {  signInWithEmailAndPassword ,sendPasswordResetEmail} from 'firebase/auth';
export default function Loginpage  ({navigation}) {

  const [state, setState] = useState(null);
  const dependency1 = true;
  const dependency2 = true;
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [showPassword, setShowPassword] = useState(false);



// db.transaction((tx) => {
//   tx.executeSql('DELETE FROM users WHERE id > 2');
// });

const [loading, setLoading] = useState(true);
useEffect(()=>{

 const unsub= auth.onAuthStateChanged(user=>{
  setLoading(false);

  
  })

return unsub
}, [dependency1, dependency2] )

if (loading) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator />
      <Text style={{ color:"red" }}  >Loading...</Text>
    </View>
  );
}
// const googleAuth = async () => {
//   try {
//       const result = await Google.logInAsync({
//           androidClientId: '294844539734-098mva3cck5e8psqveksmkrr6lq72avb.apps.googleusercontent.com',
//           iosClientId: '294844539734-qbgmrpi9csv2o8mdm3sav0l5pts6panm.apps.googleusercontent.com',
//           scopes: ['profile', 'email'],
//       });

//       if (result.type === 'success') {
//         // Use the returned access token to authenticate the user
//         const { accessToken } = result;
//         setAccessToken(accessToken);
//         return accessToken;
//       } else {
//         console.log('Authentication failed.');
//       }
//     } catch (e) {
//       console.log('Error:', e);
//     }
//   };

  // const url = 'https://accounts.google.com/';

  // const handleGoogleLogin = () => {
  //   Linking.openURL(url);
  // }


// async function getuserdata(){ 
//   let userinforResponse=await fetch("https:'//www.googleapis.com/userinfo/v2/me",{
//     headers: { Authorization: 'Bearer ${accessToken}'}
//   })

// }


// const facebookAuth = async () => {
//   try {
//       await Facebook.initializeAsync('677198687428718');
//       const {
//           type,
//           token,
//           expires,
//           permissions,
//           declinedPermissions,
//       } = await Facebook.logInWithReadPermissionsAsync({
//           permissions: ['public_profile'],
//       });
//       if (type === 'success') {
//           // Get the user's name using Facebook's Graph API
//           const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
//           const user = await response.json();
//           return user;
//       } else {
//           // type === 'cancel'
//           return {cancelled: true};
//       }
//   } catch ({ message }) {
//       return {error: message};
//   }
// }



// const openWebpage = async () => {
//   try {
//     // Open the Facebook login page in the default browser
//     const url = 'https://www.facebook.com/v8.0/dialog/oauth?client_id=677198687428718&redirect_uri=YOUR_REDIRECT_URI&scope=public_profile';
//     await Linking.openURL(url);

//     // Listen for the redirect back to your app
//     const redirectUrl = await Linking.getInitialURL();
//     if (redirectUrl) {
//       // Handle the redirect and get the access token
//       // ...
//     }
//   } catch (error) {
//     console.error('An error occurred', error);
//   }
// }

// function displayData() {
//   db.transaction(tx => {
//     // update existing rows to add current timestamp
//     tx.executeSql("UPDATE users SET created_at = datetime('now') WHERE created_at IS NULL");
//     // select all data from users table
//     tx.executeSql('SELECT * FROM users', [], (_, { rows }) => {
//       console.log(JSON.stringify(rows));
//     });
//   });
// }
function homepage() {
  navigation.reset({
    index: 0,
    routes: [{ name: 'HomePage' }],
  });
}

const setLoggedInUserId = async (id) => {
  await AsyncStorage.setItem('loggedInUserId',  id.toString());
}
// const handleLogin = async() => {
//   // Query the database for the user with the given email


//   db.transaction(tx => {
//     tx.executeSql('SELECT * FROM users WHERE email = ?', [username], (_, { rows }) => {
//       // If no user was found, show an error message
//       if (rows.length === 0) {
//         Alert.alert(
//           'Error',
//           'No user found ',
//           [
//             { text: 'OK', onPress: () => console.log('OK pressed') },
//           ],
//           { cancelable: false },
//         );
//         return;
//       }

//       // If the user was found, check if the password matches
//       const user = rows.item(0);
//       if (user.password !== password) {

//         Alert.alert(
//           'Error',
//           'Incorrect password Click below forget password',
//           [
//             { text: 'OK', onPress: () => console.log('OK pressed') },
//           ],
//           { cancelable: false },
//         );
//         return;
//       }
//       if (username.length===0 && password.length===0 ) {
//         Alert.alert(
//           'Error',
//           'All information are required',
//           [
//             { text: 'OK', onPress: () => console.log('OK pressed') },
//           ],
//           { cancelable: false }
//         );
//         return;
//       }
   
//       // If the credentials are correct, navigate to the HomePage
//       if (user.password === password) {
//         homepage()
//       setLoggedInUserId(user.id);
//       Alert.alert(
//         'Sucessfully',
//         'Welcome To Nek Gambia',
//         [
//           { text: 'OK', onPress: () => console.log('OK pressed') },
//         ],
//         { cancelable: false },
//       );
//     }
     
//     });
//   });
// };
const handleSignIn = ()=>{
  if ( !email || !password ) {
    Alert.alert(
      'Error',
      'All information are required',
      [{ text: 'OK', onPress: () => console.log('OK pressed') }],
      { cancelable: false }
    );
    return;
  }



  NetInfo.fetch().then((state) => {
    if (state.isConnected) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // User is signed in
          const user = userCredential.user;
          console.log(user);
          // Do something with the signed-in user
          navigation.reset({
            index: 0,
            routes: [{ name: 'HomePage' }],
          });
          if (user) {
            Alert.alert(
              'Success',
              'Welcome to Nek Gambia',
              [{ text: 'OK', onPress: () => console.log('ERRO') }],
              { cancelable: false }
            );
          }
        })
        .catch((error) => {
          // Handle authentication errors here
          console.log(error);
          Alert.alert(
            'Error',
            'Email or Password is incorrect',
            [{ text: 'OK', onPress: () => console.log('Invalid password') }],
            { cancelable: false }
          );
        });
    } else {
      Alert.alert(
        'No Internet Connection',
        'Please connect to the internet',
        [{ text: 'OK', onPress: () => console.log('ok') }],
        { cancelable: false }
      );
    }
  });
 
    
}
const changePassword = (email) => {
  // Send password reset email
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Show success message
      alert("Password reset email sent");
    })
    .catch((error) => {
      // Show error message
      alert(error.message);
    });
};


  return (
    <ScrollView style={styles.container}>
     <View  >
          
     

 
      <Text style={styles.textstyle}> PLEASE LOGIN </Text>
<View style={{backgroundColor:'white',margin:5}}>
    

  <TextInput  placeholder='Enter Email ' style={styles.inputstyle}  value={email}     onChangeText={text => setEmail(text)}/>

  


  <View style={{backgroundColor:'white',margin:5}}>
  <TextInput 
    placeholder='Enter Password' 
    style={styles.inputstyle} 
    value={password} 
    onChangeText={text => setPassword(text)}
    secureTextEntry={!showPassword} // added secureTextEntry prop
  />

  <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{position: 'absolute', top: 12, right: 10}}>
    <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color='gray' />
  </TouchableOpacity>
</View>
    </View>
  <View style={styles.buttonstyle} >
  <Button     title='Login '    style={{ padding: 10 ,color:'pink'}} onPress={handleSignIn} />
   </View> 


  
  <View style={styles.buttonstyle}>
  <Button   title='Register '     style={{ padding: 10, backgroundColor:'blue',color:'white' } } onPress={()=> navigation.push('Register')}
  
  />
</View>
 
{/* <Button     title='dispaly users '    style={{ padding: 10 ,color:'pink'}} onPress={displayData} /> */}

<TouchableOpacity   onPress={()=> navigation.navigate('ForgotPassword')} >

  <Text  style={{margin:20, color:'black',  alignItems: 'center',
    justifyContent: 'center',}}   href="www.google.com">              Forget password? Click here</Text>
    </TouchableOpacity>

{/* 
<View style={{flexDirection:'row', alignSelf:'center', padding:20}}>
<TouchableOpacity style={{borderColor:'blue', borderWidth:2, borderRadius:20, margin:10, paddingHorizontal:10, height:40,backgroundColor:'blue'}}  onPress={googleAuth } >
<FontAwesome name="google" size={35} color='white'   />

</TouchableOpacity>


<TouchableOpacity style={{borderColor:'blue', borderWidth:2, borderRadius:20, margin:10, paddingHorizontal:10, height:40,backgroundColor:'blue'}}  onPress={openWebpage  } >
<FontAwesome name="facebook" size={35} color='white'   />

</TouchableOpacity>

<TouchableOpacity style={{borderColor:'blue', borderWidth:2, borderRadius:20, margin:10, paddingHorizontal:10, height:40,backgroundColor:'blue'}}  >
<FontAwesome name="instagram" size={35} color='white'   />

</TouchableOpacity>

<TouchableOpacity style={{borderColor:'blue', borderWidth:2, borderRadius:20, margin:10, paddingHorizontal:10, height:40,backgroundColor:'blue'}}  >
<FontAwesome name="twitter" size={35} color='white'   />

</TouchableOpacity>

</View> */}




  <View style={styles.container}>
    
      <Text   style={{color:'black',fontSize:20,marginTop:250}}  >Deverlop By Ismaila-Turner</Text>
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
 
   marginBottom:0,
    margin:5,
    padding:10,
   
   
    


   
  },
  textstyle:{
    margin:10,
    padding: 10,
    fontSize:20,
    
 
     color:'black',
    alignSelf: 'center',
   
    fontWeight:'bold',
  },
  buttonstyle:{
   
    
    margin:12,
  
    padding:5,
    borderRadius:10,
    color:'black' ,  
   backgroundColor:'lightgreen'
     
     
   
  

  },
  inputstyle:{



borderBottomColor:'blue',
borderBottomWidth:1.9,
backgroundColor:'white',
fontSize:18,
margin:10,

marginLeft:8,
padding:14,
width:320,
justifyContent:'center',
alignItems:'center',


borderRadius:10,



  },
  footer: {
    
    left: 0,
    right: 0,
    bottom: 10,
    height: 24,
    marginBottom:0,
    
color:'black'
  },
});
