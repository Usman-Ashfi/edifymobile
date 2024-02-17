import { View, Text, ScrollView, TextInput, Image } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import React, { useEffect } from "react";
import Cards from "../components/Cards";
import axios from "axios";

const Profile = () => {
  const [name, setName] = React.useState([]);
  async function blogsget() {
    const blog = await axios.get("https://u-shop-liart.vercel.app/api/get-all-product");
    console.log(blog.data);
    setName(blog.data?.message?.ProductData)
  }
  useEffect(()=>{
    blogsget()
  },[])
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <ScrollView>
      <View className="p-4 bg-white">
        <View className="flex flex-row w-full h-28 py-4 ">
          <View className="flex justify-center  w-[70%]">
            <Text className="text-md">Hi John,</Text>
            <Text className="text-2xl font-extrabold text-slate-700">
              Good Morning!
            </Text>
          </View>
          <View className="w-[30%]">
            <Image
              className="h-full w-full object-cover object-center"
              source={require("../../assets/3551739.jpg")}
            />
          </View>
        </View>
        <View className="flex flex-row py-6">
          <TextInput
            placeholder="Search Topic"
            className="border border-gray-300 w-[80%] mr-2 rounded-md px-4"
          />
          <View className="bg-[#000000c6] px-4 py-2 rounded-md">
            <Fontisto name="search" size={22} color="white" />
          </View>
        </View>

        <Text className="text-2xl font-extrabold py-4 text-slate-700">
          Today's Artical
        </Text>

        <View className="w-full">
          <Image
            className="h-[30vh] w-full rounded-2xl"
            source={require("../../assets/pic.jpg")}
          />
          <View className="w-full flex gap-y-4 py-6">
            <View className="flex flex-row">
              <Text className="bg-slate-300  py-1 px-4 text-sm rounded-md">
                Development
              </Text>
            </View>
            <View>
              <Text className="text-md font-extrabold tracking-widest">
                How i Get started with expo for mobile development
              </Text>
              <Text className="text-sm ">October 4</Text>
            </View>
          </View>
          <View className="w-full border-[0.5px] border-gray-300" />
        </View>

        <Text className="text-2xl font-extrabold py-4 text-slate-700">
          More Articles
        </Text>
        {name.map((v,i) => (
          <Cards key={i} title={v.name} images={v.images[0]} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Profile;
