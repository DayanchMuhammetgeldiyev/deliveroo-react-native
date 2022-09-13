import React from "react";
import { View, Text, ScrollView } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row justify-between px-4 items-center">
        <Text className="font-bold">{title}</Text>
        <EvilIcons name="arrow-right" size={24} color="black" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4 "
      >
          
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
