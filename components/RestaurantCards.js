import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

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
    <TouchableOpacity>
      <Image
        source={{
          uri: imgUrl,
        }}
        className="w-64 h-36 rounded-sm"
      />
      <View>
        <Text className="text-lg pt-2 font-bold">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <AntDesign name="star" size={20} color="green" opacity={0.5} />
          <Text className="text-xs text-gray-500">
           <Text className="text-green-300"> {rating} </Text> * {genre}
            </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCards;
