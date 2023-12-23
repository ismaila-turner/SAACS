import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import { icons, COLORS } from "../constants/index";
import { HomePage, Profile, SearchPreferences, Shopping } from "../screens";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  // Custom Tab Icon component

  const determintInitialRout = () => {
    return "HomePage";
  };
  const TabIcon = ({ icon, focused, onPress }) => {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Image
          resizeMode="cover"
          source={icon}
          style={{
            width: 30,
            height: 30,
            tintColor: focused === true ? COLORS.primary : COLORS.grey,
          }}
        />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Tab.Navigator initialRouteName={determintInitialRout}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            TabIcon({
              icon: icons.cube,
              focused: focused,
              // Onpress: () => Navigation.navigate("Home"),
            }),
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "white",
          headerTitleAllowFontScaling: true,
          // headerLeft: () => HeaderLeft({ icon: icons.logo }),
          // headerRight: () => HeaderRight({ icon: icons.bell }),
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchPreferences}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            TabIcon({
              icon: icons.search,
              focused: focused,
              // Onpress: () => Navigation.navigate("Home"),
            }),
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "white",
          headerTitleAllowFontScaling: true,
          // headerLeft: () => HeaderLeft({ icon: icons.logo }),
          // headerRight: () => HeaderRight({ icon: icons.bell }),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={Shopping}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            TabIcon({
              icon: icons.shoppingCart,
              focused: focused,
              // Onpress: () => Navigation.navigate("Home"),
            }),
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "white",
          headerTitleAllowFontScaling: true,
          // headerLeft: () => HeaderLeft({ icon: icons.logo }),
          // headerRight: () => HeaderRight({ icon: icons.bell }),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            TabIcon({
              icon: icons.person,
              focused: focused,
              // Onpress: () => Navigation.navigate("Home"),
            }),
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "white",
          headerTitleAllowFontScaling: true,
          // headerLeft: () => HeaderLeft({ icon: icons.logo }),
          // headerRight: () => HeaderRight({ icon: icons.bell }),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
