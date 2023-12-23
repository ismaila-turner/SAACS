import React, { useState, useRef } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  View,
  Animated,
  Image,
} from "react-native";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES, constants } from "../constants";
import { Platform } from "react-native";

const CategorySectionHome = () => {
  const flatListRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item, index) => {
    flatListRef.current.scrollToIndex({ index, animated: true });
    setActiveItem(item.id);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ alignItems: "center", marginRight: 10 }}>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            // backgroundColor: activeItem === item.id ? COLORS.error60 : null,
            borderRadius: 5,
            width: SIZES.width / 3.8,
            alignItems: "center",
          }}
          onPress={() => handleItemClick(item, index)}
        >
          <Image
            source={item.image}
            width={20}
            header={20}
            resizeMethod="auto"
            resizeMode="stretch"
            style={{ width: 35, height: 35 }}
          />
          <Text
            style={{
              color: activeItem === item.id ? COLORS.primary : COLORS.dark,

              fontWeight: "900",
            }}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        paddingTop:
          Platform.OS === "android"
            ? StatusBar.currentHeight + SIZES.padding
            : "auto",
      }}
    >
      <FlatList
        ref={flatListRef}
        data={constants.Categories}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={renderItem}
        snapToAlignment="center"
        decelerationRate="fast"
      />
    </SafeAreaView>
  );
};

export default CategorySectionHome;
