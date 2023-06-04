import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import StackNavigator from "./StackNavigator";
import CarouselCards from "../../appIntro/CarouselCards";
const Router = () => {
  const firstTime = useSelector((state) => state.app.firstTime);
  const loggedIn = useSelector((state) => state.app.loggedIn);

  return (
    <NavigationContainer>
      {firstTime ? (
        <CarouselCards />
      ) : (
        <StackNavigator />
      )}
    </NavigationContainer>
  );
};

export default Router;