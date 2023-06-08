import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from "../../screens/ProfileScreen";
import MyAppointment from "../../screens/MyAppointment";
import AboutUs from "../../screens/AboutUs";

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="MyAppointment" component={MyAppointment} />
      <Stack.Screen name="AboutUS" component={AboutUs} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;