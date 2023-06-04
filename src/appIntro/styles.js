import { StyleSheet } from "react-native";
import { ITEM_WIDTH } from "./CarouselCardItem";
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 20,
        shadowColor: "#000",
        marginTop:150,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
      },
      image: {
        width: ITEM_WIDTH,
        height: 300,
      },
      header: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
      },
      body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20
      },
      nextbt:{
        
            flex: 1,
            alignSelf: "flex-end",
            justifyContent: "space-between",
            backgroundColor: "black",
            borderWidth: 0.4,
            borderRadius: 10
            
          
      },
      dot:
        { width: 10,
             height: 10, 
             borderRadius: 5,
              marginHorizontal: 0, 
              backgroundColor: 'rgba(0, 0, 0, 0.92)' }
      
});
export default styles;
