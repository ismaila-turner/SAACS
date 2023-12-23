import {StyleSheet, View, Text,TextInput,Button} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import { NavigationContainer} from "@react-navigation/native";
import Animated,{useSharedValue, useAnimatedStyle} from 'react-native-reanimated';






export default function FirstScreen  ({navigation}) {
 

 




  return (
    <ScrollView style={styles.container}>
     <View  >
          
     

      <View>
    
    <Image

      source={require('./nk1.png')}
      style={{ width: 340, height: 190,  alignSelf: 'center',margin:0 }}
    />
  </View>
  <ScrollView  horizontal={true}>
  <Text  style={{height:280, width:370,fontSize:17, margin:10}} >
  This is the best app to find affordable rental houses or to buy a house 
      to live in.It provides a user-friendly interface and a wide range of options to choose from. The app has a 
      comprehensive database of houses available for rent or sale in different locations, and it allows users to filter their search 
      based on various criteria such as location, budget, type of house, and amenities.The app also provides detailed information about the houses, 
      including their features, prices, and availability. With this app, users can easily find the perfect house for their needs and budget
     </Text>
     </ScrollView>


  <View style={styles.buttonstyle}>
    
  <Button     title='Login '    style={{ padding: 10 ,color:'pink'}} onPress={()=> navigation.push('Login')} />
  </View>
  
  <View style={styles.buttonstyle}>
  <Button   title='Register '     style={{ padding: 10, backgroundColor:'blue',color:'white' } } onPress={()=> navigation.push('Register')}
  
  />
   
</View>

<TouchableOpacity     onPress={()=> navigation.push('ForgotPassword')}   >
    
  <Text  style={{margin:20, color:'black',  alignItems: 'center',
    justifyContent: 'center',}}   href="www.google.com">              Forget password? Click here</Text>
    </TouchableOpacity>
    
    {/* <Button   title='Admin Login '     style={{ padding: 10, backgroundColor:'blue',color:'white' }  } onPress={()=> navigation.push('admin')} */}
  
  {/* /> */}
  <View style={styles.container}>
    
      <Text   style={{color:'black',fontSize:20,marginTop:100}}  >Deverlop By Ismaila-Turner</Text>
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
    backgroundColor: 'white',
   
    


   
  },
  textstyle:{
    marginTop:13,
  
    fontSize:15,
    padding:7,
    alignItems:'center',
    textAlign:'center',
 
     color:'black',
   
    textTransform:'capitalize',
  },
  buttonstyle:{
   
    
    margin:12,
  
    padding:5,
    borderRadius:10,
    color:'white' ,  
   backgroundColor:'lightgreen'
     
     
   
  

  },
  inputstyle:{


borderWidth:1, 
borderBottomColor:'orangered',
backgroundColor:'white',
fontSize:20,
margin:10,

marginLeft:20,
padding:14,
width:300,
justifyContent:'center',
alignItems:'center',


borderRadius:10,
textAlign:'center',


  },
  footer: {
    
    left: 0,
    right: 0,
    bottom: 10,
    height: 24,
    marginBottom:0,
    
color:'white'
  },
});
