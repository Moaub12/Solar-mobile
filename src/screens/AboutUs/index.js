import React from "react";
import { View,Text ,Image} from "react-native";
import Background from "../../components/Background";
import BackButton from "../../components/BackButton";
import Paragraph from "../../components/Paragraph";
import { useSelector } from "react-redux";

const AboutUs=({navigation})=>{
    const Logo=require("../../../assets/icon.png")
    const aboutUS = useSelector((state) => state.app.aboutBody);
    const navigatetoprofile=()=>{

        navigation.navigate("ProfileScreen")}
    return (
        <Background>
            <BackButton goBack={navigatetoprofile}/>
          <Image source={Logo}style={{height:180}}></Image>
           
          <Paragraph>
            {aboutUS}
          </Paragraph>
          
        </Background>)
}
export default AboutUs;