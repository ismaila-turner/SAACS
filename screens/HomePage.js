import React, { useLayoutEffect } from 'react';
import {StyleSheet, View, Text, TextInput, Image, ScrollView ,Dimensions, Share} from 'react-native';
import{TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Animated, LayoutAnimation, Platform } from 'react-native';

import {  FlatList,  } from 'react-native';
import { VirtualizedList } from 'react-native';



// import BuyHouseList from '../Tables/buyHomeTable/buyHomeTable';

import Icon1 from 'react-native-vector-icons/MaterialIcons';


  


export default function HomePage  ({navigation}) {


  const [searchText, setSearchText] = useState('');


  function refreshHomePage() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomePage' }],
    });
  }

  const share = async () => {
    try {
        const result = await Share.share({
        
            message: 'Check out this awesome app called Nek Gambia in the Play Store & App Store!',
            title: 'Invite a friend'
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        alert(error.message);
    }
};

  

  return (

    <View  >
    
    
    <View style={styles.container} >



      {/* <TextInput  style={styles.inputstyle}
        placeholder="Search Location to see available houses"
        value={searchText}
        onChangeText={setSearchText}
      /> */}

<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
<View style={{ fontSize:20,   alignSelf: 'center',fontWeight:'bold',margin:10, marginTop:14, color:'black', flexDirection:'row',height:'100%', borderRadius:20, backgroundColor:'white'}} >
<TouchableOpacity style={styles.topmenustyle}>
<Icon    style={{   alignSelf: 'center'}}   name="home" size={20} color="gray" />
      <Text    style={{   textAlign: 'center', fontWeight:'bold', fontSize:10}}  >Home </Text>
    </TouchableOpacity    >
    {/* Render a list of available properties here */}
   
 
{/* 
    <TouchableOpacity style={styles.topmenustyle}  onPress={()=>navigation.push('Sold Houses')} >
    <Icon    style={{   alignSelf: 'center'}}   name="home" size={18} color="gray" />
      <Text   style={{   textAlign: 'center', fontWeight:'bold', fontSize:10}}>Sold Houses</Text>
    </TouchableOpacity> */}
    {/* Render a price filter component here */}
  
    <TouchableOpacity style={styles.topmenustyle}   onPress={() => share()}   >
      
    <Icon    style={{   alignSelf: 'center'}}   name="ios-share" size={20} color="gray" />
      <Text  style={{   textAlign: 'center', fontWeight:'bold', fontSize:10}} >Share</Text>
    </TouchableOpacity  >
    {/* Render a list of customer reviews here */}
    {/* <TouchableOpacity  style={styles.topmenustyle}       onPress={()=>navigation.push('Feedback')}   >
    <Icon    style={{   alignSelf: 'center'}}   name="ios-chatbubbles" size={20} color="gray" />
      <Text   style={{   textAlign: 'center', fontWeight:'bold', fontSize:10}}>Comments</Text>
    </TouchableOpacity> */}
    {/* Render a list of customer reviews here */}
 
    <TouchableOpacity style={styles.topmenustyle}   onPress={()=>navigation.push('Help')}  >
    <Icon    style={{   alignSelf: 'center'}}   name="ios-help-circle" size={20} color="gray" />
      <Text   style={{   textAlign: 'center', fontWeight:'bold', fontSize:10}}>Help&Support</Text>
    </TouchableOpacity>
    {/* Render a price filter component here */}


{/* 
    <TouchableOpacity  style={styles.topmenustyle}  onPress={()=>navigation.push('SubmitProperty')} >
    <Icon    style={{   alignSelf: 'center'}}   name="arrow-forward" size={20} color="gray" />
      <Text   style={{   textAlign: 'center', fontWeight:'bold', fontSize:10}}>Submit A Property</Text>
    </TouchableOpacity> */}
    {/* Render a price filter component here */}


    <TouchableOpacity  style={styles.topmenustyle}  onPress={()=>navigation.push('Contact')} >
    <Icon    style={{   alignSelf: 'center'}}   name="ios-mail" size={20} color="gray" />
      <Text  style={{   textAlign: 'center', fontWeight:'bold', fontSize:10}}>Contact Us</Text>
    </TouchableOpacity  >
    {/* Render a list of customer reviews here */}
    

    <TouchableOpacity  style={styles.topmenustyle}  onPress={()=>navigation.push('About')} >
    <Icon    style={{   alignSelf: 'center'}}   name="ios-information-circle-outline" size={20} color="gray" />
      <Text  style={{   textAlign: 'center', fontWeight:'bold', fontSize:10}}>About Us</Text>
    </TouchableOpacity>
    {/* Render a list of customer reviews here */}

    <TouchableOpacity style={styles.buttonmenustyle}   onPress={()=>navigation.push('Settings')}  >
    <Icon    style={{   alignSelf: 'center', fontWeight:'bold'}}   name="ios-settings" size={20} color="grey" />
      <Text  style={{   textAlign: 'center', fontWeight:'bold' , fontSize:10}} >Settings</Text>
    </TouchableOpacity>
  </View>
  </ScrollView>

    

    

<ScrollView  style={{alignSelf:'center',margin:0,paddingHorizontal:10}} >
<Text style={{margin:10,fontSize:15,alignSelf:'center'}}>Product Categories</Text>


<View style={{flexDirection:'row',   margin:5, alignSelf:'center', borderRadius:20, }} >
<TouchableOpacity style={{backgroundColor:'white' ,borderWidth:1, borderRadius:20, borderColor:'white',elevation:10,
   }}  onPress={()=>navigation.push('BodyCream') } >
<Image source={require('../nekpic/bodycream.jpg')} 
       style={{ width: 142, height: 200,  alignSelf: 'center',margin:15 ,padding:2, borderRadius:10,}}/>

<Text style={{ fontSize:15,   alignSelf: 'center',fontWeight:'500', color:'black'}}   >
 Body Cream
</Text>
</TouchableOpacity   >

<TouchableOpacity  style={{backgroundColor:'white' ,borderWidth:1, borderRadius:20, borderColor:'white',elevation:10,
   }} onPress={()=>navigation.push('Rent House') }  >
<Image source={require('../nekpic/scrub.jpg')} 
       style={{ width: 142, height: 200,  alignSelf: 'center',margin:15 ,padding:2, borderRadius:10,}}/>
<Text style={{ fontSize:15,   alignSelf: 'center',fontWeight:'500', color:'black'}}   >
Body Scrub
</Text>


</TouchableOpacity>



</View>



<View style={{flexDirection:'row',  margin:5,  alignSelf:'center', borderRadius:20, }} >
<TouchableOpacity style={{backgroundColor:'white' ,borderWidth:1, borderRadius:20, borderColor:'white',elevation:10,
   }}  onPress={()=>navigation.push('Rent Apartment') }>
<Image source={require('../nekpic/serum.jpg')} 
       style={{ width: 142, height: 200,  alignSelf: 'center',margin:15 ,padding:2, borderRadius:10,}}/>
<Text style={{ fontSize:15,   alignSelf: 'center',fontWeight:'500', color:'black'}}   >
Serum
</Text>
</TouchableOpacity   >

<TouchableOpacity  style={{backgroundColor:'white' ,borderWidth:1, borderRadius:20, borderColor:'white',elevation:10,
   }}    onPress={()=>navigation.push('Buy a Land') }  >
<Image source={require('../nekpic/showergel.jpg')} 
       style={{ width: 142, height: 200,  alignSelf: 'center',margin:15 ,padding:2, borderRadius:10,}}/>
<Text style={{ fontSize:15,   alignSelf: 'center',fontWeight:'500', color:'black'}}   >
Shower Gel
</Text>


</TouchableOpacity>



</View>






<View style={{flexDirection:'row',  margin:5, alignSelf:'center',  borderRadius:20, }} >


<TouchableOpacity  style={{backgroundColor:'white' ,borderWidth:1, borderRadius:20, borderColor:'white',elevation:10,
   }}   onPress={()=>navigation.push('Buy House') }  >
<Image source={require('../nekpic/soap.jpg')} 
       style={{ width: 142, height: 200,  alignSelf: 'center',margin:15 ,padding:2, borderRadius:10,}}/>
<Text style={{ fontSize:15,   alignSelf: 'center',fontWeight:'500', color:'black'}}   >
Soap
</Text>


</TouchableOpacity>




<TouchableOpacity  style={{backgroundColor:'white' ,borderWidth:1, borderRadius:20, borderColor:'white',elevation:10,
   }} onPress={()=>navigation.push('rent a Shop') } >
<Image source={require('../nekpic/bodybutter.jpg')} 
       style={{ width: 142, height: 200,  alignSelf: 'center',margin:15 ,padding:2, borderRadius:10,}}/>
<Text style={{ fontSize:15,   alignSelf: 'center',fontWeight:'500', color:'black'}}   >
Body Butter
</Text>


</TouchableOpacity>



{/* <TouchableOpacity  style={{backgroundColor:'white' ,borderWidth:1, borderRadius:20, borderColor:'white',elevation:10,
   }} onPress={()=>navigation.push('rent a Shop') } >
<Image source={require('../nekpic/shop.png')} 
       style={{ width: 142, height: 160,  alignSelf: 'center',margin:15 ,padding:2  ,borderRadius:10  }}/>
<Text style={{ fontSize:15,   alignSelf: 'center',fontWeight:'bold', color:'black'}}   >
Sold Out Houses!
</Text>


</TouchableOpacity> */}



</View>






<View style={{flexDirection:'row',  margin:5, alignSelf:'center',  borderRadius:20, }} >


<TouchableOpacity  style={{backgroundColor:'white' ,borderWidth:1, borderRadius:20, borderColor:'white',elevation:10,
   }}   onPress={()=>navigation.push('Sold Houses') }  >
<Image source={require('../nekpic/kidproducts.jpg')} 
       style={{ width: 142, height: 200,  alignSelf: 'center',margin:15 ,padding:2, borderRadius:10,}}/>
<Text style={{ fontSize:15,   alignSelf: 'center',fontWeight:'500', color:'black'}}   >
Kids Products
</Text>


</TouchableOpacity>




<TouchableOpacity  style={{backgroundColor:'white' ,borderWidth:1, borderRadius:20, borderColor:'white',elevation:10,
   }} onPress={()=>navigation.push('Sold Lands') } >
<Image source={require('../nekpic/hair.jpg')}  
       style={{ width: 142, height: 200,  alignSelf: 'center',margin:15 ,padding:2, borderRadius:10,}}/>
<Text style={{ fontSize:15,   alignSelf: 'center',fontWeight:'500', color:'black'}}   >
Hair Product
</Text>


</TouchableOpacity>







{/* <TouchableOpacity  style={{backgroundColor:'white' ,borderWidth:1, borderRadius:20, borderColor:'white',elevation:10,
   }} onPress={()=>navigation.push('rent a Shop') } >
<Image source={require('../nekpic/shop.png')} 
       style={{ width: 142, height: 160,  alignSelf: 'center',margin:15 ,padding:2  ,borderRadius:10  }}/>
<Text style={{ fontSize:15,   alignSelf: 'center',fontWeight:'bold', color:'black'}}   >
Sold Out Houses!
</Text>


</TouchableOpacity> */}



</View>




<View style={{flexDirection:'row',  margin:5, alignSelf:'center',  borderRadius:20, }} >


<TouchableOpacity  style={{backgroundColor:'white' ,borderWidth:1, borderRadius:20, borderColor:'white',elevation:10,
   }}   onPress={()=>navigation.push('Buy A Car') }  >
<Image source={require('../nekpic/flattummy.jpg')} 
       style={{ width: 142, height: 200,  alignSelf: 'center',margin:15 ,padding:2, borderRadius:10,}}/>
<Text style={{ fontSize:15,   alignSelf: 'center',fontWeight:'500', color:'black'}}   >
Flat Tummy Set
</Text>


</TouchableOpacity>




<TouchableOpacity  style={{backgroundColor:'white' ,borderWidth:1, borderRadius:20, borderColor:'white',elevation:10,
   }}  >
<Image source={require('../nekpic/car4.jpg')}  
       style={{ width: 142, height: 200,  alignSelf: 'center',margin:15 ,padding:2, borderRadius:10,}}/>
<Text style={{ fontSize:15,   alignSelf: 'center',fontWeight:'500', color:'black'}}   >
Rental Car
</Text>


</TouchableOpacity>







{/* <TouchableOpacity  style={{backgroundColor:'white' ,borderWidth:1, borderRadius:20, borderColor:'white',elevation:10,
   }} onPress={()=>navigation.push('rent a Shop') } >
<Image source={require('../nekpic/shop.png')} 
       style={{ width: 142, height: 160,  alignSelf: 'center',margin:15 ,padding:2  ,borderRadius:10  }}/>
<Text style={{ fontSize:15,   alignSelf: 'center',fontWeight:'bold', color:'black'}}   >
Sold Out Houses!
</Text>


</TouchableOpacity> */}



</View>






</ScrollView>



<ScrollView horizontal={true} style={{alignSelf:'center'}}  >
<View   style={{ fontSize:7,   alignSelf: 'center',fontWeight:'bold',margin:7, color:'black', flexDirection:'row',height:'120%',backgroundColor:'white'}}  >

<TouchableOpacity style={styles.buttonmenustyle}  onPress={refreshHomePage}  >

      <Icon    style={{   alignSelf: 'center'}}   name="home" size={20} color="grey" />
      <Text   style={{   textAlign: 'center', fontWeight:'bold', fontSize:12}}  >Home</Text>
    </TouchableOpacity    >
    {/* Render a list of available properties here */}
 
    <TouchableOpacity style={styles.buttonmenustyle}   onPress={()=>navigation.push('Search')}  >
    <Icon    style={{   alignSelf: 'center'}}   name="ios-search" size={20} color="grey" />
      <Text  style={{   textAlign: 'center' , fontWeight:'bold' , fontSize:12}} >Search</Text>
    </TouchableOpacity>
    {/* Render a list of popular properties here */}
    <TouchableOpacity style={styles.buttonmenustyle} onPress={()=>navigation.push('Cart')}>
   <Icon style={{alignSelf: 'center'}} name="ios-cart" size={34} color="grey" />
  <Text style={{textAlign: 'center', fontWeight:'bold', fontSize:12}}>cart</Text>
   </TouchableOpacity>
    {/* Render a location filter component here */}

  
  
   
    <TouchableOpacity style={styles.buttonmenustyle}   onPress={()=>navigation.push('Settings')}  >
    <Icon    style={{   alignSelf: 'center', fontWeight:'bold'}}   name="ios-pricetags" size={20} color="grey" />
      <Text  style={{   textAlign: 'center', fontWeight:'bold' , fontSize:12}} >Category</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonmenustyle}  onPress={()=>navigation.push('Profile')} >
    <Icon    style={{   alignSelf: 'center', fontWeight:'bold'}}   name="ios-person" size={20} color="grey" />
      <Text  style={{   textAlign: 'center', fontWeight:'bold' , fontSize:12}} >Profile</Text>
    </TouchableOpacity>
    {/* Render a price filter component here */}

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



  color:'white'






},
buttonmenustyle:{
  
  textTransform:'uppercase',
fontWeight:'bold',
fontSize:18,
  borderInStyle: 'solid',
  borderBottomWidth:0,

  borderColor:'black',
  borderWidth: 0, borderColor: 'black', borderStyle: 'solid' ,
borderRadius:10,
margin:12,
alignSelf:'center',
padding:2,
backgroundColor:'white',
fontWeight:'bold',
shadowColor:'black',

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

