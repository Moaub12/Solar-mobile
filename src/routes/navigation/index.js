import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import CarouselCards from "../../appIntro/CarouselCards";
//import DrawerNavigator from "./DrawerNavigator";
import HomeTabNavigator from "./HomeTabNavigator";

const Router = () => {
  const firstTime = useSelector((state) => state.app.firstTime);
  const loggedIn = useSelector((state) => state.app.loggedIn);

  return (
    <NavigationContainer>
      {firstTime ? (
        <CarouselCards />
      ) : loggedIn ? (
       <HomeTabNavigator></HomeTabNavigator>
      ) : (
        <AuthNavigator />
)}

    </NavigationContainer>
  );
};

export default Router;
