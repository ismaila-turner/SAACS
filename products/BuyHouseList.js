

import React from 'react';
import {StyleSheet,  ScrollView,Button, } from 'react-native';

import house2 from './bodycreamproducts/2.jpg';
import house4 from './bodycreamproducts/2.jpg';
import house5 from './bodycreamproducts/2.jpg';
import { Image } from 'react-native';
import { useState } from 'react';
import { Alert } from 'react-native';
// import house3 from './images/house3.jpg';
// import house4 from './images/house4.jpg';
import { View, Text, TextInput } from 'react-native';
import{TouchableOpacity,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useEffect} from 'react';
import Icon1 from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage'





const buyHomeTable = [
    {
      id: 1,
      houseName: 'Men Shirt',
      houseLocation: 'Dippakunda',
      houseDescription: 'Exterior: The house has a modern design with clean lines and large windows that allow'+
      ' plenty of natural light to flood the interior. The exterior is clad in stone and wood, giving it a warm and welcoming look. '



       ,
      housePrice: 500,
    
  
      twoHouseImages: [ house2,
      ],
      multipleImages: [house2, house2, house2, house2],
      comments: ['Great location!', 'Lovely house'],
      created_at: '2023-01-31',
      houseVideo: 'https://www.youtube.com/watch?v=2qMdbXncVQk',
    },
  
    {
      id: 2,
      houseName: 'Men trousers',
      houseLocation: 'Brikama',
      houseDescription: 'A beautiful house in a serene location',
      housePrice: 600,
    
 
      twoHouseImages: [house4,],
      multipleImages: [house2, house2, house2, house2],
      comments: ['Great location!', 'Nice house'],
      created_at: '2023-01-31',
    
    },  
    {
      id: 3,
      houseName: 'Men Suit',
      houseLocation: 'Brikama',
      houseDescription: 'A beautiful house in a serene location',
      housePrice: 3000,

      twoHouseImages: [house5,],
      multipleImages: [house2, house2, house2, house2],
      comments: ['Great location!', 'Nice house'],
      created_at: '2023-01-31',
    
    }
  ];

  
  



  const House = ({ house }) => {
    const [cart, setCart] = useState([]);
  
    const addToCart = () => {
      setCart((prevCart) => [...prevCart, house]);
      Alert.alert('Item added to Cart', `${house.houseName} has been added to your cart.`);
    };
  
    return (
      <View>
        <View>
          <ScrollView style={{ padding: 6 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {house.twoHouseImages.map((img, idx) => (
                <Image style={{ width: 150, height: 200, alignSelf: 'center', margin: 10 }} key={idx} source={img} />
              ))}
            </View>
  
            <Text style={styles.houseName}>{house.houseName}</Text>
            <Text style={styles.housePrice}>GMD: {house.housePrice}</Text>
  
            <TouchableOpacity
              style={{ backgroundColor: 'orange', padding: 10, borderRadius: 5 }}
              onPress={addToCart}
            >
              <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Add to Cart</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );

  };
  
 


  const BuyHouseList = (house) => {
   
 
  
 



    const USER_ID = house.id; // replace with actual user id
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
      const newLikes = likes + 1;
      setLikes(newLikes);
      await AsyncStorage.setItem(HOUSE_LIKES_KEY, JSON.stringify(newLikes));
    };


    const [comments, setComments] = useState(house.comments || []);
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const [tab, setTab] = useState('');

    const [showListGreaterThan, setShowListGreaterThan] = useState(false);
    const [showListlessThan, setShowListlessThan] = useState(false);
    const handleClick = () => {
      setShowListGreaterThan(!showListGreaterThan);
      setShowListlessThan(!showListlessThan);

    };

    const filteredHouses = buyHomeTable.filter(house => {
      if (!house.hasOwnProperty('houseLocation')) return false;
      return house.houseLocation.toLowerCase().includes(searchText.toLowerCase());
    });

    const filteredHousesprice = buyHomeTable.filter(house => {
      if (!house.hasOwnProperty('housePrice')) return false;
      return house.housePrice >= showListGreaterThan;
    });
    
  
    const filteredHousespriceless = buyHomeTable.filter(house => {
      if (!house.hasOwnProperty('housePrice')) return false;
      return house.housePrice <= showListlessThan;
    });

    const handleHouseClick = (house) => {
   
      navigation.navigate('Details', { house });
    };
  
    const handleAddComment = (text) => {
      setComments([...comments, text]);
    };
  



    return (
      <View  style={{paddingBottom:50}}>
      <ScrollView >
        <TextInput 
          style={styles.inputstyle}
          placeholder="Search Location to see available houses"
          value={searchText}
          onChangeText={setSearchText}
        />
         <Text style={{ fontSize:20,   alignSelf: 'center',fontWeight:'bold',margin:10,padding:12, color:'black',borderBottom:2,borderBottomColor:'black',borderWidth:1 }}   >
Available Men Cloth 
</Text>

<View horizontal={true}>
      <TouchableOpacity onPress={handleClick}>
      <Text  style={{ fontSize:15,   alignSelf: 'center',margin:10, color:'blue'}} > Search By Price </Text>
      </TouchableOpacity>
      {showListGreaterThan && (
        <FlatList horizontal={true}
          data={[1,  ]}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row' }}>
          
              <TextInput 
          style={styles.inputstyle2}
          placeholder="Grater OR Equal To"
          value={showListGreaterThan}
          onChangeText={setShowListGreaterThan}
      
          
        />
             
             <TextInput 
          style={styles.inputstyle2}
          placeholder="Less OR Equal To"
          value={showListlessThan}
          onChangeText={setShowListlessThan}

          
        />




            </View>
          )}
        />
      )}
    </View>

    <View>
      
  {showListGreaterThan.length > 0 && (
    // showing houses grater than what the user input
    filteredHousesprice.length > 0 ? (
      filteredHousesprice.map((house) => (
        <ScrollView horizontal={true} key={house.id}>
          <TouchableOpacity key={house.id} onPress={() => handleHouseClick(house)}>
            <House house={house} />
          </TouchableOpacity>
        </ScrollView>
      ))
    ) : (
      <Text style={{ fontSize: 30, alignSelf: 'center', margin: 10, color: 'black', fontWeight:'bold' }}>
        No Results Found On Your Price Search
      </Text>
    )
  )}
  {showListGreaterThan.length > 0 && filteredHousesprice.length > 0 && (
    <Text style={{ fontSize: 29, alignSelf: 'left', marginTop: -40, margin: 20, color: 'black', fontWeight: 'bold' }}>
      Your Search Results Are Displayed Above
    </Text>
  )}
</View>



<View>
  {showListlessThan.length > 0 && (
    // showing the less than price houses
    filteredHousespriceless.length > 0 ? (
      filteredHousespriceless.map((house) => (
        <ScrollView horizontal={true} key={house.id}>
          <TouchableOpacity key={house.id} onPress={() => handleHouseClick(house)}>
            <House house={house} />
          </TouchableOpacity>
        </ScrollView>
      ))
    ) : (
      <Text style={{ fontSize: 30, alignSelf: 'center', margin: 10, color: 'black', fontWeight:'bold' }}>
        No Results Found On Your Price Search
      </Text>
    )
  )}
  {showListlessThan.length > 0 && filteredHousespriceless.length > 0 && (
    <Text style={{ fontSize: 29, alignSelf: 'left', marginTop: -40, margin: 20, color: 'black', fontWeight: 'bold' }}>
      Your Search Results Are Displayed Above
    </Text>
  )}
</View>



     <View>

     <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
  {filteredHouses.length > 0 ? (
    filteredHouses.map((house) => (
      <View style={{ width: '50%' }}>
        <TouchableOpacity key={house.id} onPress={() => handleHouseClick(house)}>
          <House house={house} />
        </TouchableOpacity>
      </View>
    ))
  ) : (
    <Text style={{ fontSize: 30, alignSelf: 'center', margin: 10, color: 'black', fontWeight: 'bold' }}>
      No results found
    </Text>
  )}
</View>


</View>






      </ScrollView>

      </View>
    );
  };
  
  
const styles = StyleSheet.create({
  container: {
   height:'100%',
 margin:0,

   

paddingBottom:200,

  
  alignSelf: 'center',
 textAlign:'center',

    backgroundColor: 'white',
   



   
  },   
   houseName: {
    fontSize: 15,
    fontWeight: '400',
    alignSelf:'center',
    textAlign:'center',
    margin:5

  },
  housePrice: {
    fontSize: 15,
    fontWeight: '300',
    color:'blue',
    alignSelf:'center',
    margin:5
  },
  houseLocation: {
    fontSize: 17,
    fontWeight: '400',
   padding:5
    
  },

  created_at: {
    fontSize: 15,
    fontWeight: '400',
    padding:5
    
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
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
        facility:{
    flexDirection:'row',
    marginRight:15,
    textAlign:'center',
    alignSelf:'center'
    
        },
        facilitytext:{
    marginLeft:5,
        color:'grey',
        
        },
        inputstyle2:{
  
  
 
 fontSize:14,
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
            width:179,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius:20,
            
            color:'black'
            
            
              }, 

        detailsContainer: {flex: 1, paddingHorizontal: 20, marginTop: 40},
        facility: {flexDirection: 'row', marginRight: 15},
        facilityText: {marginLeft: 5, color:'grey'},
});
;
  export default BuyHouseList;