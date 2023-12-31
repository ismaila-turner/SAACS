import React, { useLayoutEffect } from 'react';
import {StyleSheet, View, Text, TextInput, Image, ScrollView } from 'react-native';
import{TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Animated, LayoutAnimation, Platform } from 'react-native';
import houses from '../consts/houses';

export default function BuyLand ({navigation}) {


  const [searchText, setSearchText] = useState('');
  



  function refreshHomePage() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomePage' }],
    });
  }


  

  return (

    <View  >
 
    
    <View style={styles.container} >

    <ScrollView>

      <TextInput  style={styles.inputstyle}
        placeholder="Search Location to see available houses"
        value={searchText}
        onChangeText={setSearchText}
      />

    


<View  style={{margin:15 ,alignSelf:'center',}}   >
    


<Text style={{ fontSize:20,   alignSelf: 'center',fontWeight:'bold',margin:10,padding:12, color:'black',borderBottom:2,borderBottomColor:'black',borderWidth:1 }}   >
Available Land For Sale
</Text>
<Text  style={{ fontSize:15,   alignSelf: 'center',margin:2, color:'black'}} >Below are some Available Lands you might want to buy </Text>

<View style={styles.card}>
<ScrollView horizontal={true}>
<TouchableOpacity onPress={()=>navigation.push('DetailsScreen') } >
  <View style={{flexDirection:'row'}}>
   

<Image source={require('../nekpic/land.png')} 
       style={{ width: 340, height: 250,  alignSelf: 'center',margin:20 }}/>
       <View  style={styles.viewtextforsales}>
            
            <Text style={styles.textforsale}>Available For Sale</Text>
          </View>


<Image source={require('../nekpic/land.png')} 
       style={{ width: 340, height: 250,  alignSelf: 'center',margin:20 }}/>
    
      
       </View>
       </TouchableOpacity>
 </ScrollView>

<View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:0,}}>

<Text style={{fontSize:16, fontWeight:'bold'}}>Brufut Land 75 x 50 meters         </Text>
<Text style={{fontSize:16, fontWeight:'bold', color:'blue'}}>D500000</Text>

</View>

<Text style={{color:'gery', fontSize:14, marginTop:5}}> Located at Brufut</Text>
<View style={{marginTop:10, flexDirection:'row', justifyContent:'center'}}>
<View style={styles.facility}>
<Icon name='ios-mail' size={18} color="blue"/>
<Text style={styles.facilitytext}>2</Text>

</View>

<View style={styles.facility}>
<Icon name='ios-heart' size={18} color="blue"/>
<Text style={styles.facilitytext}>2</Text>

</View>

<View style={styles.facility}>
<Icon name='ios-chatbubbles' size={18} color="blue"/>
<Text style={styles.facilitytext}>2</Text>

</View>

</View>

</View>



<View style={styles.card}>
<ScrollView horizontal={true}>
  <TouchableOpacity onPress={()=>navigation.push('DetailsScreen') } >
    <View style={{flexDirection:'row'}}>
<Image source={require('../nekpic/land1.png')} 
       style={{ width: 340, height: 250,  alignSelf: 'center',margin:20 }}/>

<View  style={styles.viewtextforsales}>
            
            <Text style={styles.textforsale}>Available For Sale</Text>
          </View>

       <Image source={require('../nekpic/land1.png')} 
       style={{ width: 340, height: 250,  alignSelf: 'center',margin:20 }}/>
</View>
</TouchableOpacity>
</ScrollView>
<View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:0,}}>

<Text style={{fontSize:16, fontWeight:'bold'}}> Land 40 x 50 meters             </Text>
<Text style={{fontSize:16, fontWeight:'bold', color:'blue'}}>D450000</Text>

</View>


<Text style={{color:'gery', fontSize:14, marginTop:5}}>  Located at Manjai</Text>
<View style={{marginTop:10, flexDirection:'row' , justifyContent:'center'}}>
<View style={styles.facility}>
<Icon name='ios-mail' size={18} color="blue"/>
<Text style={styles.facilitytext}>2</Text>

</View>

<View style={styles.facility}>
<Icon name='ios-heart' size={18} color="blue"/>
<Text style={styles.facilitytext}>2</Text>

</View>

<View style={styles.facility}>
<Icon name='ios-chatbubbles' size={18} color="blue"/>
<Text style={styles.facilitytext}>2</Text>

</View>

</View>

</View>



{/* Third PUPOLAR LANDS */}



<View style={styles.card}>
<ScrollView horizontal={true}>
  <TouchableOpacity onPress={()=>navigation.push('DetailsScreen') } >
    <View style={{flexDirection:'row'}}>
<Image source={require('../nekpic/land2.png')} 
       style={{ width: 340, height: 250,  alignSelf: 'center',margin:20 }}/>
       <View  style={styles.viewtextforsales}>
            
            <Text style={styles.textforsale}> Available For Sale</Text>
          </View>


<Image source={require('../nekpic/land2.png')} 
       style={{ width: 340, height: 250,  alignSelf: 'center',margin:20 }}/>
       </View>
</TouchableOpacity>
</ScrollView>
<View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:0,}}>

<Text style={{fontSize:16, fontWeight:'bold'}}> Land 50 x 50 meters              </Text>
<Text style={{fontSize:16, fontWeight:'bold', color:'blue'}}>D250000</Text>

</View>

<Text style={{color:'gery', fontSize:14, marginTop:5}}>    Located at Tanji</Text>
<View style={{marginTop:10, flexDirection:'row'  , justifyContent:'center'}}>
<View style={styles.facility}>
<Icon name='ios-mail' size={18} color="blue"/>
<Text style={styles.facilitytext}>2</Text>

</View>

<View style={styles.facility}>
<Icon name='ios-heart' size={18} color="blue"/>
<Text style={styles.facilitytext}>2</Text>

</View>

<View style={styles.facility}>
<Icon name='ios-chatbubbles' size={18} color="blue"/>
<Text style={styles.facilitytext}>2</Text>

</View>

</View>

</View>



</View>

</ScrollView>

<ScrollView horizontal={true} style={{alignSelf:'center'}}  >
<View   style={{ fontSize:10,   alignSelf: 'center',fontWeight:'bold',margin:10, color:'black', flexDirection:'row',height:'120%',backgroundColor:'white'}}  >

<TouchableOpacity style={styles.buttonmenustyle}  onPress={refreshHomePage}  >

      <Icon    style={{   alignSelf: 'center'}}   name="home" size={22} color="blue" />
      <Text   style={{   textAlign: 'center', fontWeight:'bold', fontSize:12}}   >Home</Text>
    </TouchableOpacity    >
    {/* Render a list of available properties here */}
 
    <TouchableOpacity style={styles.buttonmenustyle} >
    <Icon    style={{   alignSelf: 'center'}}   name="ios-mail" size={22} color="blue" />
      <Text  style={{   textAlign: 'center' , fontWeight:'bold' , fontSize:12}} >Inbox</Text>
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
  </View>
  </ScrollView>
 
    </View>
    </View>
   
   
  );



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
margin:11,
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
textforsale:{

color: 'white',
 fontSize: 15, 
 fontWeight:'bold',

position: 'absolute', 
padding: 7, 
backgroundColor:'black',right:45, 
 opacity:0.8,
 width: 160,
 borderRadius:40
},

viewtextforsales:{
  width: 0,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius:100

}


  });
;

