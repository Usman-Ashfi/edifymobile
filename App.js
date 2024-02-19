import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./Tabs";
import { useEffect, useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function App() {
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <View className="w-full h-full flex justify-center items-center bg-black">
        <Image
          source={require("./assets/splash.gif")}
          className="h-1/2 w-1/2  object-cover"
        />
      </View>
    );
  }

  if (!login) {
    return (
      <View className="relative w-full h-full flex justify-center items-center bg-whit">
        <ImageBackground
          className="h-full w-full absolute"
          source={require("./assets/login.jpg")}
        />
        <View className="w-[80%] border h-full py-40 justify-between  flex">
          <View>
            <Text className="text-white text-3xl font-extrabold mb-2">
              Welcome !
            </Text>
            <Text className="text-white text-md font-extrabold">
              Log in to Continue
            </Text>
          </View>

          <View>
            <TextInput
              placeholder="UserName"
              placeholderTextColor="#fff"
              className="bg-[#413f3fa3] w-full py-4 px-2 rounded-full text-white placeholder:text-white mb-4"
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#fff"
              className="bg-[#413f3fa3] w-full py-4 px-2 rounded-full text-white placeholder:text-white"
            />
          </View>

          <View className="flex gap-y-3">
            <TouchableOpacity>
              <Text className="p-4 text-sm  bg-white rounded-full text-center ">
                Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text className="p-4 text-sm  bg-white rounded-full text-center ">
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
