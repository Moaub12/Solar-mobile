import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Button from '../components/Button';
import data from '../../assets/AppIntro/data';
import { useSelector, useDispatch } from 'react-redux';
import { firstLog } from '../redux/slices/app.slice';
import { color } from '../theme';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={item.imgPath} style={styles.image} />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
};

const CarouselCards = () => {
  const [enable, setEnable] = useState(false);
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const firstTime = useSelector((state) => state.app.firstTime);
  const dispatch = useDispatch();

  function nav() {
    dispatch(firstLog({ firstTime: false }));
    
  }

  function showbutton(count) {
    setIndex(count);
    if (count === data.length - 1) {
      setEnable(true);
    } else {
      setEnable(false);
    }
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
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={styles.dot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      <Button
        mode="contained"
        disabled={!enable}
        onPress={nav}
        style={{ backgroundColor:color }}
      >
        Get Started
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 20,
    shadowColor: '#000',
    marginTop: 150,
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
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
});

export default CarouselCards;
