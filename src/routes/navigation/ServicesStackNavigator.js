import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import CreateAppointement from "../../screens/CreateAppointement";
import ServicesScreen from "../../screens/ServicesScreen";
const Stack = createStackNavigator();

const ServicesStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ServicesScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ServicesScreen" component={ServicesScreen} />
      <Stack.Screen name="CreateAppointement" component={CreateAppointement} />
    </Stack.Navigator>
  );
};

export default ServicesStackNavigator;