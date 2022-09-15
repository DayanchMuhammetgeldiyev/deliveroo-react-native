import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign,Entypo } from "@expo/vector-icons";

const RestaurantCards = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="shadow-sm bg-white mr-3">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="w-64 h-36 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="text-lg pt-2 pb-2 font-bold">{title}</Text>
        <View className="flex-row items-center space-x-1 ">
          <AntDesign name="star" size={16} color="green" opacity={0.5} />
          <Text className="text-xs text-gray-500">
           <Text className="text-green-300"> {rating} </Text> * {genre}
            </Text>
        </View>
        <View className="flex-row items-center space-x-1 mt-2 mb-2">
        <Entypo name="location-pin" size={22} opacity={0.5} color="gray" />
        <Text className="text-xs text-gray-500">hey * {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCards;
