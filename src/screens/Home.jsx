import {
  View,
  Text,
  Image,
  ScrollView,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import BlogsCard from "../components/BlogsCardhome";

const Home = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(-100));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View
      style={{
        opacity: fadeAnim, 
        transform: [{translateY: slideAnim}]
      }}
    >
      <View className=" bg-white">
        <View className="flex flex-row w-full h-36 p-4  justify-center items-center  bg-slate-600 rounded-b-3xl ">
          <View className="flex justify-center  w-[70%]">
            <Text className="text-md text-white">Hi,</Text>
            <Text className="text-2xl font-extrabold text-white">
              Usman Ashfaq
            </Text>
          </View>

          <Image
            className="h-20 w-20 object-cover object-center rounded-full"
            source={require("../../assets/3551739.jpg")}
          />
        </View>

        <View className="px-4">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-2xl font-extrabold py-4 text-slate-700">
              Blogs
            </Text>
            <TouchableOpacity>
              <Text className="py-1 px-4 text-sm rounded-md">Read More</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal>
            <BlogsCard />
            <BlogsCard />
            <BlogsCard />
            <BlogsCard />
            <BlogsCard />
          </ScrollView>
        </View>
      </View>
    </Animated.View>
  );
};

export default Home;
