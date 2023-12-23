import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Share } from "react-native";
import { COLORS, SIZES, dummyData, FONTS, icons } from "../constants";
import ItemImage from "../components/ItemImage";
import IconeBotten from "../components/common/IconeBotten";
import CategorySectionHome from "../components/CategorySectionHome";

export default function HomePage({ navigation }) {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // Handle searchText state changes here
  }, [searchText]);

  const share = async () => {
    try {
      const result = await Share.share({
        message:
          "Check out this awesome app called Nek Gambia in the Play Store & App Store!",
        title: "Invite a friend",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <ItemImage
          ContentContainerStyle={{ height: SIZES.width / 2 }}
          image={item.image}
          onImagePress={() => navigation.navigate("Product", { item })}
        />
        <View style={{ paddingHorizontal: SIZES.base }}>
          <Text
            style={{ color: COLORS.success, fontWeight: "500", fontSize: 12 }}
          >
            {" "}
            {item.category}
          </Text>
          <Text
            style={{
              fontSize: SIZES.h4,
              lineHeight: 19,
              fontWeight: "900",
              paddingBottom: SIZES.base,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              color: COLORS.primary,
              paddingTop: SIZES.base,
              fontWeight: "900",
            }}
          >
            GMD {item.price}
          </Text>
          <Text style={{ fontSize: 11 }}>{item.date}</Text>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <IconeBotten
              icone={icons.car1}
              iconeStyle={{
                tintColor: COLORS.success,
              }}
            />
            <Text style={{ color: COLORS.secondary }}>Free Shipping</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CategorySectionHome />
      {/* categories */}

      {/* items */}
      <FlatList
        data={dummyData.banners}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        initialNumToRender={10}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
  },
  menuItem: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 10,
  },
  menuText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 10,
  },
  itemContainer: {
    paddingBottom: SIZES.base,
    marginHorizontal: SIZES.base,
    backgroundColor: COLORS.light,
    marginVertical: SIZES.base,
    borderRadius: SIZES.radius,
    width: SIZES.width / 2.2,
    backgroundColor: "white",
    shadowColor: "#000",
    overflow: "hidden",

    elevation: 10,
  },
  listContainer: {},
});
