import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import BlogsCard from "../components/BlogsCardhome";
import Cards from "../components/Cards";
import Pagetransition from "../components/Pagetransition";

const Home = () => {
  var name = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Pagetransition>
      <ScrollView className=" bg-white">
        <View className="flex  w-full px-4 py-16 gap-y-4 justify-center items-center  bg-[#121212f1] rounded-b-[50px] ">
          <Image
            className="h-16 w-16 object-cover object-center rounded-full"
            source={require("../../assets/3551739.jpg")}
          />

          <Text className="text-2xl font-extrabold text-white">
            Usman Ashfaq
          </Text>
        </View>
        {/* blog Cards Section --------------------------------------- */}
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
        {/* News Cards Section --------------------------------------- */}
        <View className="px-4">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-2xl font-extrabold py-4 text-slate-700">
              News
            </Text>
            <TouchableOpacity>
              <Text className="py-1 px-4 text-sm rounded-md">Read More</Text>
            </TouchableOpacity>
          </View>
          {name.map((v, i) => (
            <Cards
              key={i}
              title="hi"
              images={
                "https://plus.unsplash.com/premium_photo-1700575181289-b5248a43e7f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          ))}
        </View>
      </ScrollView>
    </Pagetransition>
  );
};

export default Home;
