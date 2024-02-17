import { View, Text, Image } from "react-native";
import React from "react";

const BlogsCard = (props) => {
  return (
    <View className="w-screen">
      <View className="overflow-hidden rounded-md border border-black/10">
        <Image
          className="w-full h-auto  "
          style={{ width: "100%", height: 200 }}
          source={require("../../assets/pic.jpg")}
        />
        <View className="absolute bottom-0 z-10 w-full bg-[#151515ad]  text-white ">
          <View className="relative mb-5 p-2">
            <Text
              numberOfLines={2}
              className="font-extrabold text-xs text-white  "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            </Text>
          </View>
          <View className="absolute bottom-1 z-10">
            <Text className="  text-[10px] text-white px-2 pb-1  ">
              {/* {new Date(props.date).toDateString()} */}
              Octobor 4
            </Text>
          </View>
          <View className="absolute bottom-1 right-0 px-2 z-10">
            <Text className="text-[10px] text-white">Ali Shabbir</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BlogsCard;
