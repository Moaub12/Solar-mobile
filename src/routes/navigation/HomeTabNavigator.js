
import Home from '../../screens/Home';
import ProfileStackNavigator from './ProfileStackNavigator';
import Services from '../../screens/Services';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// solar-power
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  const getRouteIcon = (route) => {
    let icon = "";
    switch (route.toLowerCase()) {
      case "home":
        icon = "home-outline";
        break;
      case "settings":
        icon = "tune";
        break;
      case "profile":
        icon = "account-outline";
        break;
      case "appointment":
        icon = "bookmark-outline";
        break;
       case "services":
        icon="solar-power"
        break
      case "aboutus":
        icon = "information-outline";
        break;
    }

    return icon;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name={getRouteIcon(route.name)}
            color={color}
            size={24}
            
          />
        ),
        tabBarActiveTintColor: "#32C36C",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Services" component={Services} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
