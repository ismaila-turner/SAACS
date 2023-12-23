import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import HomePage from "./screens/HomePage";
import { auth } from "./firebase";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import StackNavigation from "./Navigation/StackNavigation";
import * as Font from "expo-font";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
          "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
          "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
          "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
        });
        setIsFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsActive(!!user);
    });

    loadFonts();

    return () => {
      unsubscribe();
    };
  }, []);

  if (!isFontsLoaded) {
    // You can add a loader or some placeholder here if needed
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StackNavigation />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
