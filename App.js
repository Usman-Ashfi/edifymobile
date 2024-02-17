import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./Tabs";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";

function App() {
  const [loading, setLoading] = useState(true);

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

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
