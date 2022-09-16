import React from "react";
import { View, Text, ScrollView } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import RestaurantCards from "./RestaurantCards";

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
        <RestaurantCards
          id={123}
          imgUrl="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          title="Yo, Sushi!"
          rating={4.5}
          genre="Japanese"
          address="123 Man st"
          short_description="Description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={123}
          imgUrl="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          title="Yo, Sushi!"
          rating={4.5}
          genre="Japanese"
          address="123 Man st"
          short_description="Description"
          dishes={[]}
          long={20}
          lat={0}
        />
     <RestaurantCards
          id={123}
          imgUrl="https://picsum.photos/seed/picsum/200/300"
          title="Yo, Sushi!"
          rating={4.5}
          genre="Japanese"
          address="123 Man st"
          short_description="Description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
