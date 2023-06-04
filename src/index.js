import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import Router from "./routes/navigation";

// assets


import store from "./redux/store";



const App = () => {
 
  

  // rendering
  return (
   <Provider store={store}>
    <Router/>
    </Provider>
  );
};

export default App;
