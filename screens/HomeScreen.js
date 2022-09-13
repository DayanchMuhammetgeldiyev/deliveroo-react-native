import { Text, SafeAreaView, View, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign,SimpleLineIcons,Ionicons,EvilIcons } from '@expo/vector-icons';
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row items-center mx-4 space-x-2">
         <Image 
         source={{
          uri: "https://picsum.photos/id/237/200/300"
         }}
          className="w-7 h-7 bg-gray-300 p-4 rounded-full"
         />
         <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">
            Deliver Now!      
          </Text>
          <Text className="font-bold text-lg">
              Curren Location     
              <AntDesign name="down" size={20} color="#00CCBB" />
          </Text>
         </View>
          <SimpleLineIcons name="user" size={32} color="#00CCBB" />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4 mt-3">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
        <EvilIcons name="search" size={24} color="black" />
        <TextInput 
         placeholder="Restaurants and Cafe "
         keyboardType="default"
        />
        </View>
        <Ionicons name="filter" size={24} color="#00CCBB" />
      </View>
      <ScrollView
      className="bg-gray-100"
      contentContainerStyle={{
        paddingBottom:100,
      }}
      >
       <Categories/>
       <FeaturedRow
        id="123"
        title="Featured"
        description="Paid placements out partners"
       />
         <FeaturedRow
       id="1234"
        title="Tasty Discounts"
        description="Everyone's been enjoying these juicy discount!"
       />
         <FeaturedRow
        id="1235"
        title="Offers near you"
        description="Why not support your local restaurant tonight"
       />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
