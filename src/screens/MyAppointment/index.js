import React, { useEffect, useState } from "react";
import { View, Text, Modal, Button, StyleSheet } from "react-native";
import BackButton from "../../components/BackButton";
import { Calendar } from "react-native-calendars";
import styles from "./styles";
import { color } from "../../theme";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import getappointements from "../../Services/getappointement";


const MyAppointment = ({ navigation }) => {
  useEffect(() => {
    fetchData();
  }, []);
  const token = useSelector((state) => state.app.token);
  const clientid = jwtDecode(token).client;
  const [markedDates, setMarkedDates] = useState({});
  const [appointments, setAppointements] = useState([]);
  const [selectedappointement, setSelectedAppointement] = useState({});
  const fetchData = async () => {
    try {
      const response = await getappointements(clientid);
      if (response) {
        
        setAppointements(response);
        const appointmentDates = response.map(
          (appointment) => appointment.appointment_date
        );
        const markedDatesObject = appointmentDates.reduce((obj, date) => {
          obj[date] = { selected: true };

          return obj;
        }, {});
        setMarkedDates(markedDatesObject);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigatetoprofile = () => {
    navigation.navigate("ProfileScreen");
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const openModal = (date) => {
     setSelectedDate(date);
    const appointment = appointments?.find(
      (appointment) => appointment.appointment_date === selectedDate
    );
    setSelectedAppointement(appointment);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
 
  };

  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <View style={styles.callendar}>
      <BackButton goBack={navigatetoprofile} />
      <Calendar
        current={currentDate}
        markedDates={markedDates}
        theme={{
          calendarBackground: "#ffffff",
          textSectionTitleColor: color,
          selectedDayBackgroundColor: color,
          selectedDayTextColor: "#ffffff",
          todayTextColor: color,
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: color,
          selectedDotColor: "#ffffff",
          arrowColor: color,
          monthTextColor: color,
          indicatorColor: color,
        }}
        onDayPress={(day) => {
          if (markedDates[day.dateString]) {
            openModal(day.dateString);
          }
        }}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Appointment Details</Text>
          <Text style={styles.modalText}>Date: {selectedDate}</Text>
          {selectedappointement && (
            <>
              <Text style={styles.modalText}>
                Status: {selectedappointement.status}
              </Text>
              <Text style={styles.modalText}>
                Time: {selectedappointement.appointment_time}
              </Text>
              <Text style={styles.modalText}>
                PlanType: {selectedappointement.appointment_type}
              </Text>
            </>
          )}
          <Button title="Close" color={color} onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
};
export default MyAppointment;
