import React from "react";
import { View,Text } from "react-native";
import BackButton from "../components/BackButton";
const MyAppointment=({navigation})=>{
   const navigatetoprofile=()=>{

    navigation.navigate("ProfileScreen")}
   return( <View>
        <Text>This is My Appointement page</Text>
        <BackButton goBack={navigatetoprofile}/>
    </View>)
}
export default MyAppointment;