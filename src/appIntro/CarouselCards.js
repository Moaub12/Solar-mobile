
import React from 'react'
import { View,Button } from "react-native"
import Carousel ,{Pagination}from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from './data'
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {firstLog} from   "../redux/slices/app.slice"
import styles from './styles'

const CarouselCards = () => {
  const [enable,setEnable]=useState(false)
  const[index,setIndex]=useState(0)
  const isCarousel = React.useRef(null)

const firstTime=useSelector((state)=>state.app.firstTime)
 const dispatch=useDispatch();
   function nav(){
    
  dispatch(firstLog({firstTime:false}))
  console.log(firstTime)
    
   
   }
  function showbutton(count){
   
    setIndex(count)
    if(count==data.length-1){
  
   setEnable(true)
    } else setEnable(false)
}
  return (
    <View>
     <Carousel
        layout="tinder"
        layoutCardOffset={5}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
 itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
   onSnapToItem={showbutton}
        //autoplay={true}
        //autoplayInterval={1000}
      />
      <Pagination 
      dotsLength={data.length} 
      activeDotIndex={index} 
      carouselRef={isCarousel}
       dotStyle={styles.dot} 
       inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
         tappableDots={true} />
        

         <Button style={styles.nextbt } title="next" disabled={!enable} onPress={nav}> </Button>


         
        
      
    </View>
  )
}


export default CarouselCards;
