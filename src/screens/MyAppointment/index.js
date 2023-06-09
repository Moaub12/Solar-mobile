import React, { useState } from "react";
import { View, Text, Modal, Button, StyleSheet } from "react-native";
import BackButton from "../../components/BackButton";
import { Calendar } from "react-native-calendars";
import styles from "./styles";
const MyAppointment = ({ navigation }) => {
  const navigatetoprofile = () => {
    navigation.navigate("ProfileScreen");
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const openModal = (date) => {
    setSelectedDate(date);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const currentDate = new Date().toISOString().split("T")[0];

  const markedDates = {
    "2023-06-08": { selected: true },
    "2023-06-09": { selected: true },
    "2023-06-10": { disabled: true },
  };

  return (
    <View style={styles.callendar}>
      <BackButton goBack={navigatetoprofile} />
      <Calendar
        current={currentDate}
        markedDates={markedDates}
        theme={{
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#32C36C",
          selectedDayBackgroundColor: "#32C36C",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#32C36C",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#32C36C",
          selectedDotColor: "#ffffff",
          arrowColor: "#32C36C",
          monthTextColor: "#32C36C",
          indicatorColor: "#32C36C",
        }}
        onDayPress={(day) => {
          if (markedDates[day.dateString]) {
            openModal(day.dateString);
          }
        }}
      />

      <Modal visible={modalVisible} animationType="slide" onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Appointment Details</Text>
          <Text style={styles.modalText}>Date: {selectedDate}</Text>
          {/* Add more appointment details here */}
          <Button title="Close" color="#32C36C" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
};
export default MyAppointment;