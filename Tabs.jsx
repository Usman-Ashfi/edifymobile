import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome6 } from "@expo/vector-icons";
import News from "./src/screens/News";
import Blogs from "./src/screens/Blogs";
import Home from "./src/screens/Home";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
      case "Home":
        iconName = "house";
        break;
      case "Blogs":
        iconName = "blog";
        break;
      case "News":
        iconName = "newspaper";
        break;

      default:
        break;
    }
    return <FontAwesome6 name={iconName} color={color} size={20} />;
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        unmountOnBlur: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "black",
          borderRadius: 50,
          height: 50,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Blogs" component={Blogs} />
      <Tab.Screen name="News" component={News} />
    </Tab.Navigator>
  );
};

export default Tabs;
