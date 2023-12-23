import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme, Button } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Loginpage from "./screens/Loginpage";
import Register from "./screens/Register";
import HomePage from "./screens/HomePage";

import { auth } from "./firebase";

import FirstScreen from "./screens/FirstScreen";

import About from "./screens/About";
import Contact from "./screens/Contact";
import SubmitProperty from "./screens/SubmitProperty";
import Profile from "./screens/Profile";
import Help from "./screens/Help";

import CommentSection from "./screens/CommentSection";

import BookNow from "./screens/BookNow";
import Settings from "./screens/settings/Settings";
import Report from "./screens/settings/Report";
import PrivatePolicies from "./screens/settings/PrivatePolicies";
import Feedback from "./screens/settings/Feedback";
import ShareButton from "./screens/settings/ShareButton";
import Legal from "./screens/settings/Legal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useCustomFonts } from "./constants/theme";
import StackNavigation from "./Navigation/StackNavigation";

const Stack = createNativeStackNavigator();

const MyComponent = React.memo(({ navigation, isActive }) => {
  const handleActiveClick = useCallback(() => {
    if (isActive) {
      alert("You are logged in!");
    } else {
      navigation.navigate("Login");
    }
  }, [navigation, isActive]);

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: isActive ? "#00FF00" : "#D3D3D3",
          marginLeft: 20,
          alignSelf: "center",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      />
      <Text
        style={{
          fontSize: 15,
          marginLeft: 5,
          textAlign: "center",
          justifyContent: "center",
        }}
        onPress={handleActiveClick}
      >
        {isActive ? `Active ` : "Login"}
      </Text>
    </View>
  );
});

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useCustomFonts();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsActive(!!user);
    });
    return unsubscribe;
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StackNavigation />
      </GestureHandlerRootView>
    </NavigationContainer>

    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <NavigationContainer>
    //     <Stack.Navigator initialRouteName="HomePage">
    //       <Stack.Screen
    //         name="HomePage"
    //         component={HomePage}
    //         options={({ navigation }) => ({
    //           title: "Get Your Products",
    //           headerRight: () => (
    //             <MyComponent navigation={navigation} isActive={isActive} />
    //           ),
    //           headerStyle: {
    //             backgroundColor: isDarkMode ? "black" : "white",
    //           },
    //           headerTintColor: isDarkMode ? "white" : "black",
    //         })}
    //       />
    //       <Stack.Screen name="WELCOME TO NEK GAMBIA" component={FirstScreen} />

    //       <Stack.Screen name="Login" component={Loginpage} />

    //       {/* <Stack.Screen
    //         name="ForgotPassword"
    //         component={ForgotPasswordScreen}
    //       /> */}

    //       <Stack.Screen name="Register" component={Register} />
    //       <Stack.Screen name="About" component={About} />

    //       <Stack.Screen name="Contact" component={Contact} />

    //       <Stack.Screen name="SubmitProperty" component={SubmitProperty} />

    //       <Stack.Screen name="Profile" component={Profile} />
    //       <Stack.Screen name="Help" component={Help} />

    //       <Stack.Screen name="CommentSection" component={CommentSection} />
    //       <Stack.Screen name="BookNow" component={BookNow} />
    //       <Stack.Screen name="Settings" component={Settings} />
    //       <Stack.Screen name="Report" component={Report} />
    //       <Stack.Screen name="Welcome" component={FirstScreen} />

    //       <Stack.Screen name="Private Policies" component={PrivatePolicies} />
    //       <Stack.Screen name="Feedback" component={Feedback} />
    //       <Stack.Screen name="Share" component={ShareButton} />
    //       <Stack.Screen name="Legal and policies" component={Legal} />
    //       {/* <Stack.Screen
    //         name="Delete User Account"
    //         component={DeleteUserAccount}
    //       /> */}
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </GestureHandlerRootView>
  );
}
