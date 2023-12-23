import React from 'react';
import { View, Text, StyleSheet ,TextInput,Button,ScrollView,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { FlatList } from 'react-native';
import{TouchableOpacity,Linking ,Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AsyncStorage } from 'react-native';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import {useEffect} from 'react';
import { Rating } from 'react-native-ratings';

const HouseDetails = ({ route }) => {
  const { house } = route.params;
  const navigation = useNavigation();
  const [comments, setComments] = useState(house.comments || []);
  const [tab, setTab] = useState('');
  const [inputText, setInputText] = useState('');
   const [newComment, setNewComment] = useState('');
   const houscommentid=house.comment
   useEffect(() => {
    getComments(house.comment);
  }, []);

  const handleAddComment = async ({houscommentid}) => {
    if (!newComment) return;

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setNewComment('');

    try {
      await AsyncStorage.setItem(`@comments_${houscommentid}`, JSON.stringify(updatedComments));
    } catch (error) {
      console.error(error);
    }
  };

  const getComments = async (houscommentid) => {
    try {
      const commentsFromStorage = await AsyncStorage.getItem(`@comments_${houscommentid}`);
      if (commentsFromStorage) {
        setComments(JSON.parse(commentsFromStorage));
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getComments(houscommentid);
}, []);


  React.useEffect(() => {
    getComments();
  }, []);

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  
    try {
    AsyncStorage.setItem('@comments', JSON.stringify(updatedComments));
    } catch (error) {
      console.error(error);
    }
  };
  const handlePress = async () => {
    if (!house.houseVideo) {
      Alert.alert('No Video Available', 'This house does not have a video.');
      return;
    }

    const supported = await Linking.canOpenURL(house.houseVideo);

    if (supported) {
      await Linking.openURL(house.houseVideo);
    } else {
      console.log("Don't know how to open URI: " + house.houseVideo);
    }
  };
  // the likes
  const USER_ID = 'user_id'; // replace with actual user id
  const HOUSE_LIKES_KEY = `HOUSE_LIKES_${house.id}_${USER_ID}`;
  const [likes, setLikes] = useState(0);
  
  useEffect(() => {
    const retrieveData = async () => {
      const storedLikes = await AsyncStorage.getItem(HOUSE_LIKES_KEY);
      if (storedLikes) {
        setLikes(JSON.parse(storedLikes));
      }
    };
  
    retrieveData();
  }, []);
  
  const handleLike = async () => {
    const storedLikes = await AsyncStorage.getItem(HOUSE_LIKES_KEY);
    if (!storedLikes) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      await AsyncStorage.setItem(HOUSE_LIKES_KEY, JSON.stringify(newLikes));
    }
  };
  

  const [rating, setRating] = useState(0);

  const handleRating = async (rating) => {
    // Save the rating in AsyncStorage
    try {
      await AsyncStorage.setItem('userRating', rating.toString());
      console.log('Rating saved:', rating);
    } catch (error) {
      console.log('Error saving rating:', error);
    }
    setRating(rating);
  };

  return (

    <ScrollView>
    <View style={styles.container}>

<ScrollView horizontal={true}>

        <View  style={{flexDirection:'row',justifyContent:'space-between'}} >
       
        {house.twoHouseImages.map((img, idx) => (
          <Image    style={{ width: 360, height: 360,  alignSelf: 'center',margin:10 }}  key={idx} source={img} />
        ))}
    
      </View>
  
      </ScrollView>


      <Text style={styles.header}>{house.houseName}</Text>
      <Text style={styles.text}>Location: {house.houseLocation}</Text>
      <Text style={styles.text}>Posted at: {house.created_at}</Text>

    {/* Facilities container */}
    {/* <View style={{flexDirection: 'row', margin:10,paddingBottom:20}}>
            <View style={styles.facility}>
              <Icon1 name="hotel" size={18} color="blue"/>
              <Text style={styles.facilitytext}> {house.bedroom}  </Text>
            </View>
            <View style={styles.facility}>
              <Icon1 name="bathtub" size={18}  color="blue"/>
              <Text style={styles.facilitytext}> {house.bathroom} </Text>
            </View>
            <View style={styles.facility}>
              <Icon1 name="aspect-ratio" size={18}  color="blue"/>
              <Text style={styles.facilitytext}> {house.squaremeter} </Text>
            </View>
          </View> */}


          <ScrollView horizontal={true}>

<View  style={{flexDirection:'row',justifyContent:'space-between'}} >

{house.multipleImages.map((img, idx) => (
  <Image    style={{ width: 360, height: 360,  alignSelf: 'center',margin:10 }}  key={idx} source={img} />
))}

</View>

</ScrollView>

<Button title='Watch This Property Video ' style={{ padding: 50,color:'white' }} onPress={handlePress} />


      <Text style={styles.sectionHeader}>Description:   {house.houseDescription}  </Text>
      <Text style={styles.text}>{house.description}</Text>
      <View style={{marginTop:10, flexDirection:'row',marginLeft:100,margin:50}}>
        {/* <View style={styles.facility}>
          <Icon name='ios-mail' size={18} color="blue"/>
          <Text style={styles.facilitytext}>2</Text>
        </View> */}
       {/* <TouchableOpacity onPress={handleLike}>
  <View style={styles.facility}>
    <Icon name='ios-heart' size={18} color={likes > 0 ? 'red' : 'gray'} />
    <Text style={styles.facilitytext}>{likes}</Text>
  </View>
</TouchableOpacity> */}

        {/* <TouchableOpacity onPress={() => setTab(tab === 'ios-chatbubbles' ? '' : 'ios-chatbubbles')}>
      
          <View style={styles.facility}>
            <Icon name='ios-chatbubbles' size={18} color="blue"/>
         
            <Text style={styles.facilitytext}> {comments.length}</Text>
          </View>
        </TouchableOpacity> */}
      </View>
      {tab === 'ios-chatbubbles' && (
        <View  >
            <Text style={{margin:10, fontSize:15}} >Leave an averroll commment  </Text>
          <TextInput
            style={styles.inputstyle}
            placeholder="Add a comment"
            value={newComment}
            onChangeText={setNewComment}
          />
            <Button 
    title="Post" 
    onPress={() => handleAddComment(houscommentid)}
  />
  <ScrollView horizontal={true} >
          <FlatList  
            data={comments}
            
            renderItem={({ item }) =>
          
             <Text style={styles.comment}>{item}</Text>
        
        }

          
          />
          </ScrollView>
        </View>
      )}
<View style={styles.bookNowBtnview}>
<View style={styles.bookNowBtn}>
          
            </View>

            <View style={{paddingBottom:900,margin:20,}}>
      {/* Your existing code */}
  
      {/* Rating component */}
      <Rating
        
        ratingCount={5}
        imageSize={30}
   
     
        onFinishRating={handleRating}
      />
    </View>

            </View>

            <Text  Style={{paddingBottom:2000,padding:100,fontSize:20}} > Deverlop by Turner</Text>
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom:200
  },
  bookNowBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 10,
    paddingHorizontal: 20,
    margin:10,
    
  },
  bookNowBtnview: {
    height: 50,
   paddingBottom:100
    
  },
  rating:{
paddingBottom:200
  },
  comment: {
    height: 40,
   fontSize:19,
   
    
  },

  header: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 16,
  },
  sectionHeader: {
    fontSize: 19,
    fontWeight: '300',
    marginVertical: 8,
    alignSelf:'center',
    textAlign:'left'
    
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
    fontWeight: '300',
  },  facility:{
    flexDirection:'row',
    marginRight:15,
    textAlign:'center',
    alignSelf:'center'
    
        },
        facilitytext:{
    marginLeft:5,
        color:'grey',
        
        }, inputstyle:{
  
  
 
 
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
});

export default HouseDetails;
