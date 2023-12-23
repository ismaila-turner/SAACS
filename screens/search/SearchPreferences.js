import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Alert } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import Icon from "react-native-vector-icons/Ionicons";

const SearchPreferences = ({ navigation }) => {
  function refreshHomePage() {
    navigation.reset({
      index: 0,
      routes: [{ name: "HomePage" }],
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
              margin: 10,
              padding: 10,
              textTransform: "capitalize",
            }}
          >
            Select the specific area you want to search
          </Text>
          <View>
            <TouchableOpacity onPress={() => navigation.push("Buy House")}>
              <Text
                style={{ fontSize: 20, color: "blue", margin: 10, padding: 5 }}
              >
                {" "}
                Search to Buy Home{" "}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.push("Rent House")}>
              <Text
                style={{ fontSize: 20, color: "blue", margin: 10, padding: 5 }}
              >
                {" "}
                Search to Rent House{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push("Rent Apartment")}>
              <Text
                style={{ fontSize: 20, color: "blue", margin: 10, padding: 5 }}
              >
                {" "}
                Search to Rent Apartment{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push("rent a Shop")}>
              <Text
                style={{ fontSize: 20, color: "blue", margin: 10, padding: 5 }}
              >
                {" "}
                Search to Rent a shop{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push("Buy a Land")}>
              <Text
                style={{ fontSize: 20, color: "blue", margin: 10, padding: 5 }}
              >
                {" "}
                Search to Buy Land{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push("Sold Houses")}>
              <Text
                style={{ fontSize: 20, color: "blue", margin: 10, padding: 5 }}
              >
                {" "}
                Search For Sold Houses{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push("Sold Lands")}>
              <Text
                style={{ fontSize: 20, color: "blue", margin: 10, padding: 5 }}
              >
                {" "}
                Search For Sold Lands{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    margin: 0,

    paddingBottom: 20,

    alignSelf: "center",
    textAlign: "center",

    backgroundColor: "white",
  },
  facility: {
    flexDirection: "row",
    marginRight: 15,
    textAlign: "center",
  },
  facilitytext: {
    marginLeft: 5,
    color: "grey",
  },
  card: {
    height: 400,
    backgroundColor: "white",
    elevation: 10,
    shadowColor: "grey",

    width: 340,
    marginRight: 0,
    marginLeft: -10,
    borderRadius: 20,
    margin: 5,
  },
  menucontainer: {
    marginTop: "30",
    alignItems: "center",

    justifyContent: "flex-end",
    padding: 0,
    flexDirection: "row",

    justifyContent: "space-between",
    borderTopColor: "black",

    textTransform: "uppercase",
    margin: 5,
    borderInStyle: "solid",
    borderColor: "black",
    borderColor: "black",
    borderStyle: "solid",

    textTransform: "uppercase",

    bottom: 0,
    left: 0,
    right: 0,
  },

  topmenu: {
    justifyContent: "flex-end",
    padding: 0,
    flexDirection: "row",

    justifyContent: "space-between",
    borderTopColor: "black",

    textTransform: "uppercase",
    margin: 4,
    borderInStyle: "solid",
    borderColor: "black",
    borderColor: "black",
    borderStyle: "solid",

    textTransform: "uppercase",
    fontWeight: "bold",

    bottom: 0,
    left: 0,
    right: 0,
  },

  topmenustyle: {
    textTransform: "capitalize",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    borderInStyle: "solid",
    borderBottomWidth: 0,
    borderRightWidth: 0,

    borderColor: "black",
    borderWidth: 0,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 5,
    margin: 5,
    padding: 7,
    backgroundColor: "white",
    fontWeight: "bold",
    shadowColor: "blue",
    shadowOpacity: 6,
    elevation: 3,
    shadowOffset: { width: 5, height: 5 },
    color: "white",
  },
  buttonmenustyle: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 22,
    borderInStyle: "solid",
    borderBottomWidth: 0,
    borderRightWidth: 1,
    borderColor: "black",
    borderWidth: 0,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 10,
    margin: 10,
    alignSelf: "center",
    padding: 2,
    backgroundColor: "white",
    fontWeight: "bold",
    shadowColor: "black",
    shadowOpacity: 7,
    elevation: 3,
    shadowOffset: { width: 5, height: 10 },
    color: "white",
  },

  menubuttonstyle: {
    textTransform: "uppercase",

    borderInStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",

    padding: 10,
    backgroundColor: "white",
    flex: 0,
    bottom: 0,
    fontWeight: "bold",
  },

  textstyle: {
    margin: 20,
    padding: 5,
    fontSize: 15,

    justifyContent: "center",
    color: "white",
    alignSelf: "center",
    textTransform: "capitalize",
  },
  buttonstyle: {
    margin: 5,
    backgroundColor: "lightgreen",
    padding: 5,
    borderRadius: 20,
  },
  inputstyle: {
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 3,
    shadowOffset: { width: 5, height: 5 },
    padding: 15,
    borderWidth: 0.5,
    backgroundColor: "white",
    borderBottomColor: "blue",
    margin: 10,

    marginLeft: 16,
    padding: 15,
    width: 335,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,

    color: "black",
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
    height: 24,
    margin: 0,

    color: "white",
  },
});
export default SearchPreferences;
