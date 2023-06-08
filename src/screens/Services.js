import React from "react";
import { View, Text, ScrollView } from "react-native";
import ServiceCarousel from "../components/ServiceCarousel";
import data from "../appIntro/data"; 

const Services = () => {
  return (
    <ScrollView >
      <View style={styles.titleContainer }>
        <Text style={styles.title}>Installation</Text>
      </View>
      <ServiceCarousel data={data} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>After Sale</Text>
      </View>
      <ServiceCarousel data={data} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Upgrade</Text>
      </View>
      <ServiceCarousel data={data} />
    </ScrollView>
  );
};

const styles = {
  titleContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
};

export default Services;
