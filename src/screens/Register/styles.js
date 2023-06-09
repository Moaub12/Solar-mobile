import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 16,
    },
    button: {
      marginTop: 24,
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
      justifyContent:'space-around',
    },
    link: {
      fontWeight: 'bold',
      color: '#32C36C',
      padding:5,
    },
    text:{
      padding:5,
    },
    localtextinput:{
      height:40
    }
  }); 
  export default styles;
  