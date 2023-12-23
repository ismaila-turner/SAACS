import {StyleSheet, View, Text,TextInput,Button, Dimensions} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import { useState ,useEffect} from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import { NavigationContainer} from "@react-navigation/native";
import Animated, {timing , Easing,useCode, cond, eq, set } from 'react-native-reanimated';
import { StackActions } from '@react-navigation/native';
import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from "../../firebase"
import {db} from "../../firebase"
import { getFirestore, collection, addDoc,onSnapshot ,query, orderBy, } from 'firebase/firestore';


const Feedback=({navigation})=> {
    const [comment, setComment] = useState('');
    const [user_name, setUser_name] = useState('');
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [nationality, setNationality] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageurl, setImageurl] = useState(null);
    const [created_at, setCreated_at] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

  const shakeAnim = new Animated.Value(0);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [feedback, setFeedback] = useState([]);

  const getLoggedInUserIdFromStorage = async () => {
    // Retrieve the logged in user's ID from local storage
    const loggedInUserId = await AsyncStorage.getItem('loggedInUserId');

    // Return the logged in user's ID
    return loggedInUserId;
  };
  




// to navigate back to the home page 
function refreshHomePage() {
  navigation.reset({
    index: 0,
    routes: [{ name: 'HomePage' }],
  });
}
// to refresh report
function refresfedback() {
    navigation.dispatch(StackActions.replace('Feedback'));
    }




// useEffect(() => {
//     db.transaction(tx => {
//       tx.executeSql(
//         'CREATE TABLE IF NOT EXISTS Feedback (id INTEGER PRIMARY KEY AUTOINCREMENT, comment TEXT,  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,     user_id TEXT NOT NULL  ) '
//       );
//     });
//   }, []);
  
//   const insertData = (comment) => {
//     if (comment !== '') {
     

//       db.transaction(tx => {
//         tx.executeSql('INSERT INTO Feedback (comment,user_id) VALUES (?,?)', [comment, name], (_, err) => {
           
//                 Alert.alert(
//                     'Success',
//                     'Your Feedback has been posted !',
//                     [
//                       { text: 'OK', },
//                     ],
//                     { cancelable: false }
                   
//                   );
//                   setError(false);
//                   refresReport();
//                   navigation.navigate('Feedback')

//            });
//         });


//     }    if (comment === '') {
//         setError(true);
//       alert('Please type something');
//     }


//   }


// to insert data for user to comment
const insertData =  () => {


  if (!comment || !name ) {
    Alert.alert(
      'Error',
      ' Infromation required.',
      [
        { text: 'OK', onPress: () => console.log('OK pressed') },
      ],
      { cancelable: false }
    );
    return;
  }
     

addDoc(collection(db, "Feedback"), {
  name:name,
comment: comment,
Created_at: new Date().toISOString(),
})
.then(() => {
  Alert.alert(
    'Success',
    'Thanks for your feedback.',
    [
      { text: 'OK', onPress: () => console.log('OK pressed') },
    ],
    { cancelable: false }
  );

  refresfedback()
})
.catch((error) => {
  alert(error.message);
});
};




useEffect(() => {
  const unsubscribe = onSnapshot(collection(db, 'Feedback'), (snapshot) => {
    const feedbackData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFeedback(feedbackData);
  });
  return () => unsubscribe();
}, []);







  return (

    <View style={styles.container} >
    <ScrollView style={styles.container}>
       
     <View  >
     <Text  style={{fontSize:25, alignSelf:'center', fontWeight:'bold', margin:10, backgroundColor:'grey',padding:10, height:60}} >
         FeedBack
            </Text> 


            <Text style={{color:'black',marginLeft:18, margin:20,fontWeight:'500', fontSize:17,}} >Give us your FeedBack
</Text>
<TextInput style={styles.inputstyle}
        placeholder="Your Name" value={name} 
        
        onChangeText={text => setName(text)}
     
      />


<TextInput   placeholder=' write here'style={{height: 150,   borderColor: error ? 'red' : 'gray', borderWidth: 1,margin:10,marginLeft:16,padding:10, fontSize:17}     }
 multiline={true}
 numberOfLines={15}
onChangeText={text => setComment(text)} onFocus={() => setError(false)} value={comment}  />



<Button title='Submit ' style={{ padding: 10 ,color:'pink'}} onPress={insertData} /> 

{/* <Button title='SHOW' style={{ padding: 10 ,color:'pink'}} onPress={displayData} />  */}

<View >
<ScrollView  horizontal={true}  >
<FlatList
  data={feedback}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={{margin:15, padding:8}}>
      <Text  style={styles.itemName} >{item.name}</Text>
      <Text style={{fontSize:18}} >{item.comment}</Text>
      <Text style={{fontSize:16}} >{new Date(Date.parse(item.Created_at)).toLocaleString()}</Text>



    </View>
  )}
/>
     
          {/* // <View style={{margin:10, padding:10}}>


          // <Text  style={styles.itemName}>  {item.user_id}</Text>
          // <Text style={styles.itemAddress}><Text style={{fontWeight:'bold',paddin:5}} >Feedback :</Text>      {item.comment}</Text>
       
          // <Text style={styles.itemNationality}><Text style={{fontWeight:'bold',paddin:5}} >Created at :</Text>   {item.created_at}</Text>
         
      
          // </View>
         */}
        
         </ScrollView>  



           
          </View>

<Text style={{color:'black', margin:10,fontWeight:'500', fontSize:15,padding:5}} > Information about your device, account and this
 app will be automatically included in this report. To learn more about how your information is used, please see our<TouchableOpacity   onPress={()=>navigation.navigate('Private Policies')}  >
    <Text style={{color:'blue', fontWeight: 'bold', margin:12, fontSize:15}}>Privacy Policy</Text>
    </TouchableOpacity>
</Text>




<Text style={{margin:10,  fontSize:20, fontWeight:'bold'}}>
    Call Us NOW!
</Text>
<Text style={{margin:5, fontSize:15, fontWeight:'bold'}} >
   Telephone: +220 2425949 / 7387057
</Text>



</View   >

</ScrollView>
<ScrollView horizontal={true} style={{alignSelf:'center'}}  >
<View   style={{ fontSize:7,   alignSelf: 'center',fontWeight:'bold',margin:5, color:'black', flexDirection:'row',height:'120%',backgroundColor:'white'}}  >

<TouchableOpacity style={styles.buttonmenustyle}  onPress={refreshHomePage} >

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
     
  
  
  
     
    },
    

itemName: {
fontSize: 20,
fontWeight: 'bold',

textAlign:'left',
margin:5,
marginTop:0,

},
itemAddress: {
fontSize: 16,
margin:3,
},
itemNationality: {
fontSize: 16,
margin:3,
},
itemTelephone: {
fontSize: 16
},
itemEmail: {
fontSize: 16
}
,
avatar: {
  width: 50,
  height: 50,
  borderRadius: 100,
  marginBottom: 20,
},
header: {
  alignItems: 'left',
  paddingTop: 40,
  paddingBottom: 20,
  marginLeft:150,
},
noImageContainer: {
  width: 50,
  height: 50,
  borderRadius: 100,
  marginBottom: 20,
  backgroundColor:'lightgrey',
 
},
    
    
    
    facility:{
flexDirection:'row',
marginRight:15,
textAlign:'center',

    },
    facilitytext:{
marginLeft:5,
    color:'grey',
    
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
  
  
 
 fontSize:17,
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


export default Feedback