import React from "react";
import { View, Text,TouchableOpacity} from "react-native";
import Button from "../../components/Button"
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../redux/slices/app.slice";
import{color}  from "../../theme";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  
  
  const username= useSelector((state) => state.app.username)
  
  const Logout=()=>{
    dispatch(authenticate({ loggedIn: false,username:{},token:'' }));

  }
  const NavigateToAppointement=()=>{
   
    navigation.navigate('MyAppointment')}
  
const NavigateToAboutUS=()=>{
  navigation.navigate('AboutUS')
}
const NavigateToMyAccount=()=>{

}
  
  const RenderInfoSection=()=>{return(
    <View style={styles.infoSection}>
    
    <Ionicons name="person" size={60} color={color}  />
    <View style={styles.verticalLine}></View>
    <View>
      <Text style={styles.name}>Mohamad Ayoubi</Text>
      <Text >@{username}</Text>
    </View>
  </View>
    )}
  const renderutton=(iconName,title,onPress)=>{
   return( 
    <View style={styles.button}>
      <View style={styles.iconTitleWraper}>
      <MaterialCommunityIcons name={iconName} style={styles.icon} color={color}/>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress}> 
      
        <MaterialCommunityIcons name="arrow-right" size={30} color={color} style={{marginLeft:'auto',padding:10,}} />
          </TouchableOpacity>
     
      </View>
      {/* <View style={styles.horizontalLine}></View> */}
    </View>
   ) 
  }
  const RenderButtonsSection=()=>{return(<View style={{marginTop:100,marginLeft:5,}}>
    {renderutton("account-circle","My Account",NavigateToMyAccount)}
    {renderutton("bookmark-multiple","My appointements",NavigateToAppointement)}
    {renderutton("information-outline","AboutUs",NavigateToAboutUS)}
    {renderutton("logout","Logout",Logout)}
   
   </View>)}
  return(<View style={styles.container}>
    
    {RenderInfoSection()}
    {RenderButtonsSection()}
  </View>)
};
export default ProfileScreen;
