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
import Animated,{useSharedValue, useAnimatedStyle} from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/Ionicons';

import Picker from '@react-native-picker/picker';
import {  FlatList,  } from 'react-native';
import { VirtualizedList } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { SectionList, } from 'react-native';
    const howToGetAhouse = () => {
      Alert.alert('If you found a house / land or a shop that you need send' +
      ' us an email or call us then we will link you to the direct owner of the property ');
    };


    const data = [
        {
         label: [ <Text style={{ height: 10, fontSize: 15}} numberOfLines={4}>
                If you found a house / land or a shop that 
                you 
               
              </Text>],
                 label2: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
                   need  send us an email or call us then we will 
                  </Text>],

label3: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
                   link you to the direct owner of the property. </Text>],




label4: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
  Depends on the house/rent in some cases. But in Generally No discount giving to the properties  </Text>],



label5: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
                   Depend on the specific property and the circumstances.
                   
                     </Text>],


label6: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
  
   In some cases, the price of a rental property or a house
    for sale may be flexible and open to negotiation,
    while in other cases the price may be fixed and non-negotiable.   
    </Text>],




label7: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
  
  Its Depends whether the onwer of the house agree to it or not 
   but some lands can be paid in installment.  
   </Text>],


label8: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
  
Yes Pets are allowed if you rent a house. 
   </Text>],


label9: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
  
                   Once you've found a property that you're interested in, 
                  
     </Text>],


label10: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
               you'll need to contact us to express your 
              
</Text>],




label11: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
  
interest and schedule a viewing in person of the property .
</Text>],


label12: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
  
          If your application is accepted, you'll typically need 
  </Text>],




label13: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
  
                   to sign a lease or purchase agreement to finalize the rental
              
</Text>],


label14: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
  
or purchase of the property. Be sure to read and understand
    the terms of the agreement before signing.
</Text>],



label15: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
         Yes some lands can be paid in installment but not all.

  </Text>],



label16: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
  Please read the shop discription properly.

</Text>],


label17: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
On the home page on top, scroll horizontally 

</Text>],

label18: [ <Text style={{ height: 10, fontSize: 15 }} numberOfLines={4}>
                   
 and click on the submit property button.
  
  </Text>],

     







        },
  



        
      ];

const Help=({navigation})=> {
  function refreshHomePage() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomePage' }],
    });
  }
    const [selectedValue, setSelectedValue] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedValue2, setSelectedValue2] = useState('');
    const [showDropdown2, setShowDropdown2] = useState(false);

    const [showDropdown3, setShowDropdown3] = useState(false);
    const [showDropdown4, setShowDropdown4] = useState(false);
    const [showDropdown5, setShowDropdown5] = useState(false);
    const [showDropdown6, setShowDropdown6] = useState(false);
    const [showDropdown7, setShowDropdown7] = useState(false);
    const [showDropdown8, setShowDropdown8] = useState(false);
    const [showDropdown9, setShowDropdown9] = useState(false);
    const [showDropdown10, setShowDropdown10] = useState(false);



      try{
   
  return (

    <View style={styles.container} >
    <ScrollView   >
       
     <View  >
        <View  style={{fontSize:20, alignSelf:'center', fontWeight:'bold', margin:10,}}  >
        <Text  style={{fontSize:20, textAlign:'center', fontWeight:'bold', margin:10,}} >
            How can we help you 
            </Text> 
            <TextInput  style={styles.inputstyle}
        placeholder="Search for help or support"
      />
            </View>
<Text    onChangeText={text => setPropertyTitle(text)}  style={{fontSize:20,padding:10, margin:10,alignSelf:'center', }}  >
FREQUENTLY ASKED QUESTIONS           click on the questions below . 

</Text>






<Text  style={{fontSize:18,padding:0, margin:5, fontWeight:'bold' }}     onPress={() => setShowDropdown(!showDropdown)}>
1. How to get a house / land /shop  
</Text>



{/*  question one function  */}

<ScrollView style={{flex:1, }}   >
<View   >


  
    {showDropdown && (
    
      <FlatList   horizontal={true}
 
        style={{ margin: 15, height:60,  }}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedValue(item.value)}
          >
            <Text>{item.label}</Text>
           <Text>{item.label2}</Text>
           <Text>{item.label3}</Text>

          </TouchableOpacity>
        )}
        keyExtractor={item => item.value}
      />

    )}



</View>

</ScrollView>





<Text  style={{fontSize:18,padding:0, margin:5,  fontWeight:'bold'}}     onPress={() => setShowDropdown2(!showDropdown2)}>
2. Any discount for the housess/lands & shops 
</Text>

{/*  question two function  */}

<ScrollView style={{flex:1, }}   >
<View   >
    {showDropdown2 && (
    
      <FlatList   horizontal={true}
 
        style={{ margin: 15, height:60,  }}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity  
          onPress={() => setSelectedValue2(item.value)}
          >
           
           <Text>{item.label4}</Text>

          </TouchableOpacity>
        )}
  
      />

    )}



</View>

</ScrollView>




<Text  style={{fontSize:18,padding:0, margin:5,  fontWeight:'bold' }}     onPress={() => setShowDropdown3(!showDropdown3)}>
3. Is the price negotiable?
</Text>

{/*  question three function  */}

<ScrollView style={{flex:1, }}   >
<View   >
    {showDropdown3 && (
    
      <FlatList   horizontal={true}
 
        style={{ margin: 15, height:60,  }}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => setSelectedValue(item.value)}
          >
           
           <Text>{item.label5}</Text>
           <Text>{item.label6}</Text>
          </TouchableOpacity>
        )}
 
      />

    )}



</View>

</ScrollView>






<Text  style={{fontSize:18,padding:0, margin:5,  fontWeight:'bold' }}     onPress={() => setShowDropdown4(!showDropdown4)}>
4. Can you buy a house by paying in installment 
</Text>

{/*  question four function  */}

<ScrollView style={{flex:1, }}   >
<View   >
    {showDropdown4 && (
    
      <FlatList   horizontal={true}
 
        style={{ margin: 15, height:60,  }}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => setSelectedValue(item.value)}
          >
           
         <Text>{item.label7}</Text>
          </TouchableOpacity>
        )}
   
      />

    )}



</View>

</ScrollView>






<Text  style={{fontSize:18,padding:0, margin:5,  fontWeight:'bold' }}     onPress={() => setShowDropdown5(!showDropdown5)}>
5.Are pets allowed? 
</Text>

{/*  question five function  */}

<ScrollView style={{flex:1, }}   >
<View   >
    {showDropdown5 && (
    
      <FlatList   horizontal={true}
 
        style={{ margin: 15, height:60,  }}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => setSelectedValue(item.value)}
          >
           
         <Text>{item.label8}</Text>
          </TouchableOpacity>
        )}
      
      />

    )}



</View>

</ScrollView>







<Text  style={{fontSize:18,padding:0, margin:5,  fontWeight:'bold' }}     onPress={() => setShowDropdown6(!showDropdown6)}>
6.How can i Contact the landlord or seller
</Text>

{/*  question six function  */}

<ScrollView style={{flex:1, }}   >
<View   >
    {showDropdown6 && (
    
      <FlatList   horizontal={true}
 
        style={{ margin: 15, height:60,  }}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => setSelectedValue(item.value)}
          >
           
         <Text>{item.label9}</Text>
         <Text>{item.label10}</Text>
         <Text>{item.label11}</Text>
          </TouchableOpacity>
        )}
     
      />

    )}



</View>

</ScrollView>






<Text  style={{fontSize:18,padding:0, margin:5,  fontWeight:'bold' }}     onPress={() => setShowDropdown7(!showDropdown7)}>
7.Sign a lease or purchase agreement:
</Text>

{/*  question Seven function  */}

<ScrollView style={{flex:1, }}   >
<View   >
    {showDropdown7 && (
    
      <FlatList   horizontal={true}
 
        style={{ margin: 15, height:60,  }}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => setSelectedValue(item.value)}
          >
           
         <Text>{item.label12}</Text>
         <Text>{item.label13}</Text>
         <Text>{item.label14}</Text>
          </TouchableOpacity>
        )}
      />

    )}



</View>

</ScrollView>





<Text  style={{fontSize:18,padding:0, margin:5,  fontWeight:'bold' }}     onPress={() => setShowDropdown8(!showDropdown8)}>
8. Can i buy a land in installment?:
</Text>

{/*  question eight function */}

<ScrollView style={{flex:1,}}   >
<View   >
    {showDropdown8 && (
    
      <FlatList   horizontal={true}
 
        style={{ margin: 15, height:60,  }}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => setSelectedValue(item.value)}
          >
           
         
         <Text>{item.label15}</Text>
          </TouchableOpacity>
        )}
       
      />

    )}



</View>

</ScrollView>






<Text  style={{fontSize:18,padding:0, margin:5,  fontWeight:'bold' }}     onPress={() => setShowDropdown9(!showDropdown9)}>
9.How would i be paying shop rent?
</Text>

{/*  question Nine function */}

<ScrollView style={{flex:1,}}   >
<View   >
    {showDropdown9 && (
    
      <FlatList   horizontal={true}
 
        style={{ margin: 15, height:60,  }}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => setSelectedValue(item.value)}
          >
           
         
         <Text>{item.label16}</Text>
          </TouchableOpacity>
        )}
     
      />

    )}
</View>

</ScrollView>






<Text  style={{fontSize:18,padding:0, margin:5,  fontWeight:'bold' }}     onPress={() => setShowDropdown10(!showDropdown10)}>
10. How to submit a property for sale
</Text>

{/*  question ten function */}

<ScrollView style={{flex:1,}}   >
<View   >
    {showDropdown10 && (
    
      <FlatList   horizontal={true}
 
        style={{ margin: 15, height:60,  }}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => setSelectedValue(item.value)}
          >
           
         
         <Text>{item.label17}</Text>
         <Text>{item.label18}</Text>
          </TouchableOpacity>
        )}
     
      />

    )}
</View>

</ScrollView>







<Text style={{margin:10, fontWeight:'bold'}}>
    Call Us NOW!
</Text>
<Text>
   Telephone: +220 2425949 / 7387057
</Text>
<Text>
  Email:ismailatorres@yahoo.com
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
  ) } catch (error) {
    console.error(error);
  }
}


const styles = StyleSheet.create({
    container: {
   
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
fontWeight:'bold',

alignSelf:'center',


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


export default Help