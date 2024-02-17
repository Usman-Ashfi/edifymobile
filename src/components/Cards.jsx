import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";

const Cards = ({ title, images }) => {
  console.log(images);
  return (
    <View className="relative flex flex-row items-center w-full rounded-md overflow-hidden my-2">
      <Image
        className="h-full w-[30%] aspect-[9/7] rounded-2xl"
        source={{
          uri: images,
        }}
      />
      <View className="w-[70%] flex justify-center px-5 py-4  bg-gradient-to-t from-black via-black to-transparent">
        <Text
          numberOfLines={2}
          className="text-md w-full font-extrabold tracking-wide"
        >
          {title}
        </Text>
        <Text className="text-sm font bold">October 4</Text>
      </View>
    </View>
  );
};

export default Cards;
