import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import getPlans from "../../Services/getPlans";
import PlansCarousel from "../../components/PlansCarousel";

const ServicesScreen = ({ navigation }) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getPlans();
      if (response) {
        setPlans(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const installationPlans = plans?.filter((plan) => plan.type === "Installation");
  const upgradePlans = plans?.filter((plan) => plan.type === "Upgrade");
  const aftersalesPlans = plans?.filter((plan) => plan.type === "After-Sales");

  const handlePlanClick = (plan) => {
    
    navigation.navigate('CreateAppointement', { plan });
  };

  return (
    <ScrollView>
      {installationPlans && installationPlans.length > 0 && (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Installation</Text>
          </View>

          <PlansCarousel
            data={installationPlans}
            button={true}
            onClick={handlePlanClick}
          />
        </>
      )}
      {aftersalesPlans && aftersalesPlans.length > 0 && (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>After Sale</Text>
          </View>
          <PlansCarousel
            data={aftersalesPlans}
            button={true}
            onClick={handlePlanClick}
          />
        </>
      )}
      {upgradePlans && upgradePlans.length > 0 && (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Upgrade</Text>
          </View>
          <PlansCarousel
            data={upgradePlans}
            button={true}
            onClick={handlePlanClick}
          />
        </>
      )}
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

export default ServicesScreen;
