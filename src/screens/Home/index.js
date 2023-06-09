import React from "react";
import { View,Text ,ScrollView,Image,Dimensions} from "react-native";
import ServiceCarousel from "../../components/ServiceCarousel";
import homedata from "../../../assets/HomeData/homedata";

const Home=()=>{
    const Image_WIDTH = Dimensions.get('window').width;
    const home=require("../../../assets/HomeData/pictures/home.jpg")
   return( <View>
        
       <ScrollView>
           
           <Image source={home} style={{height:200,width:Image_WIDTH,marginBottom:20,}}></Image>
          <ServiceCarousel data={homedata} button={false} />

       </ScrollView>
    </View>)
}
export default Home;