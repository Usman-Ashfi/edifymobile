import { NavigationContainer } from "@react-navigation/native";
import News from "./src/screens/News";
import Blogs from "./src/screens/Blogs";
import Home from "./src/screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          options={{
            title: "Discovery",
            drawerIcon: ({ focused, size }) => (
              <AntDesign name="home" size={24} color="black" />
            ),
            headerStyle: {
              backgroundColor: "rgb(71 85 105)",
            },
            headerTintColor: "#fff",
          }}
          name="Home"
          component={Home}
        />
        <Drawer.Screen
          options={{
            title: "News",
            drawerIcon: ({ focused, size }) => (
              <FontAwesome5 name="newspaper" size={24} color="black" />
            ),
          }}
          name="News"
          component={News}
        />
        <Drawer.Screen
          options={{
            title: "Blogs",
            drawerIcon: ({ focused, size }) => (
              <FontAwesome5 name="blog" size={24} color="black" />
            ),
          }}
          name="Blogs"
          component={Blogs}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
