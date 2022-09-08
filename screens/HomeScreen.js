import { Text, SafeAreaView, View, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";



const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View className="flex-row items-center mx-4 space-x-2">
         <Image 
         source={{
          uri: "https://picsum.photos/id/237/200/300"
         }}
          className="w-7 h-7 bg-gray-300 p-4 rounded-full"
         />
         <View>
          <Text className="font-bold text-gray-400 text-xs">
            Deliver Now!      
          </Text>
          <Text className="font-bold text-lg">
              Curren Location     
          </Text>
         </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
