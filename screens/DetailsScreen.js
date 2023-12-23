import React, { useLayoutEffect } from 'react';
import {StyleSheet, View, Text, TextInput, Image, ScrollView } from 'react-native';
import{TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer} from "@react-navigation/native";

const DetailsScreen=({navigation})=> {


  const [searchText, setSearchText] = useState('');

  return (



<View >
<Image source={require('../nekpic/apar.png')} 
       style={{ width: 350, height: 200,  alignSelf: 'center',margin:15 ,padding:2, borderRadius:10,}}/>
</View>
   
  
   
   
  );



}

const styles = StyleSheet.create({
    container: {
     height:'100%',
   margin:0,

     
      paddingHorizontal:10,
paddingBottom:20,

     
      alignSelf: 'center',
   textAlign:'center',
     
      backgroundColor: 'white',
     
  
  
  
     
    },
  });
;
export default DetailsScreen
