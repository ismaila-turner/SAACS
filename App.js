import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,useColorScheme,Button ,} from 'react-native';
import { useState,useEffect } from 'react'; // import useState hook
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loginpage from "./screens/Loginpage";
import Register from "./screens/Register";
import HomePage from './screens/HomePage';

import { auth } from "./firebase";

import FirstScreen from './screens/FirstScreen';

import About  from './screens/About';
import Contact  from './screens/Contact';
import SubmitProperty  from './screens/SubmitProperty';
import Profile  from './screens/Profile';
import Help  from './screens/Help';

import CommentSection from './screens/CommentSection';


import BookNow from './screens/BookNow';
import Settings from './screens/settings/Settings';
import Report from './screens/settings/Report';
import PrivatePolicies from './screens/settings/PrivatePolicies';
import Feedback from './screens/settings/Feedback';
import ShareButton from './screens/settings/ShareButton';
import Legal from './screens/settings/Legal';

// import BuyHouseList from './Tables/buyHomeTable/buyHomeTable';
// import HouseDetails  from './Tables/buyHomeTable/HouseDetails ';
// import CartScreen  from './Tables/buyHomeTable/CartScreen ';
// import RentHouseList from './Tables/rentHomeTable/rentHouseTable';

// import RentApartList from './Tables/rentApartTable/rentApartTable';

// import Buylandlist from './Tables/BuyLandTable/BuyLandTable';
// import Rentshoplist from './Tables/RentShopTable/RentShopTable';
// import soldhouselist from './Tables/soldHouseTable/soldHouseTable';
// import BuyCarList from './Tables/BuyCarTable/BuyCarTable';


// import soldlandlist from './Tables/soldLandTable/soldLandTable';
import SearchPreferences from  './screens/settings/SearchPreferences';
import ForgotPasswordScreen  from './screens/ForgotPasswordScreen';
import DeleteUserAccount  from './screens/settings/DeleteUserAccount';
import 'react-native-screens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

export default function App() {
 
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const [darkMode, setDarkMode] = useState(isDarkMode);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsActive(!!user);
    });

    return unsubscribe;
  }, []);

  function MyComponent({ navigation }) {
  
  
    const handleActiveClick = () => {
      if (isActive) {
        alert('You are logged in!');
      } else {
        navigation.navigate('Login');
      }
    }
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View   
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: isActive ? '#00FF00' : '#D3D3D3',
            marginLeft:20,
            alignSelf:'center',
            alignItems: 'center',
            textAlign:'center',
            justifyContent:'center',
            fontWeight:'bold'
          }}
        />
        <Text
          style={{ fontSize: 15, marginLeft: 5, textAlign: 'center', justifyContent: 'center' }}
        
          onPress={handleActiveClick}
        >
          {isActive ? `Active ` : 'Login'}
        </Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
<NavigationContainer>

<Stack.Navigator initialRouteName='HomePage'>
        <Stack.Screen
          name='HomePage'
          component={HomePage}
          options={({ navigation }) => ({
            title: 'Get Your Products',
            headerRight: () => <MyComponent navigation={navigation} />,
            headerStyle: {
              backgroundColor: darkMode ? 'black' : 'white',
            },
            headerTintColor: darkMode ? 'white' : 'black',
          })}
        />
 <Stack.Screen name="WELCOME TO NEK GAMBIA" component={FirstScreen}/>

  <Stack.Screen name="Login" component={Loginpage}    />

  <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
 


 <Stack.Screen name="Register" component={Register}/>

 {/* <Stack.Screen name="Buy A Car" component={BuyCarList}/> */}

 {/* <Stack.Screen name="HomePage" component={HomePage} styles={{backgroundColor:'blue'}}   ScreenOptions={{HeaderShown:false}}  /> */}





 <Stack.Screen name="About" component={About}/>
 
 <Stack.Screen name="Contact" component={Contact}/>

 <Stack.Screen name="SubmitProperty" component={SubmitProperty}/>

 <Stack.Screen name="Profile" component={Profile}/>
 <Stack.Screen name="Help" component={Help}/>






 <Stack.Screen name="CommentSection" component={CommentSection} />
 {/* <Stack.Screen name="Edit Your Profile" component={EditProfileScreen} /> */}

 <Stack.Screen name="BookNow" component={BookNow} />
 <Stack.Screen name="Settings" component={Settings} />
 <Stack.Screen name="Report" component={Report} />
 <Stack.Screen name="Welcome" component={FirstScreen} />

 <Stack.Screen name="Private Policies" component={PrivatePolicies} />
 <Stack.Screen name="Feedback" component={Feedback} />
 <Stack.Screen name="Share" component={ShareButton} />
 <Stack.Screen name="Legal and policies" component={Legal} />

 {/* <Stack.Screen name="Buy House" component={BuyHouseList} /> */}
 {/* <Stack.Screen name="Details" component={HouseDetails} /> */}
{/* <Stack.Screen name="Cart" component={CartScreen} /> */}

 {/* <Stack.Screen name="Rent House" component={RentHouseList} />
 <Stack.Screen name="Rent Apartment" component={RentApartList} />
 <Stack.Screen name="Buy a Land" component={Buylandlist} />
 <Stack.Screen name="rent a Shop" component={Rentshoplist} />
 <Stack.Screen name="Sold Houses" component={soldhouselist} />
 <Stack.Screen name="Sold Lands" component={soldlandlist} /> */}
 <Stack.Screen name="Search" component={SearchPreferences} />

 {/* <Stack.Screen name="admin" component={Admin} /> */}

 <Stack.Screen name="Delete User Account" component={DeleteUserAccount} />

 </Stack.Navigator>


 
    </NavigationContainer>


    </GestureHandlerRootView>
 
  );

  
}




const styles = {
  footer: {
    
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
    backgroundColor: 'orangered',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

