import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Register, Product } from "../screens";
import TabNavigation from "./TabNavigation";
import { FONTS } from "../constants";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const screenOptions = {
    headerShadowVisible: false,
    headerShown: false,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigation}
        options={screenOptions}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={screenOptions}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          title: "Product Details",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
