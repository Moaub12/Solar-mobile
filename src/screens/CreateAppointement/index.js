import React, { useState } from "react";
import { View, Text, Modal, Button, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import BackButton from "../../components/BackButton";
import { Calendar } from "react-native-calendars";
import styles from "./styles";
import { color } from "../../theme";
import api from "../../Services/axiosInst";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";

const CreateAppointment = ({ navigation, route }) => {
  const navigatetoprofile = () => {
    navigation.navigate("ServicesScreen");
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const { plan } = route.params;
  const token = useSelector((state) => state.app.token);
  const clientid = jwtDecode(token).client;
  const details = "blablavla";
  const date = "2023-06-26";

  const openModal = (date) => {
    setSelectedDate(date);
    setModalVisible(true);
  };
  const abort=()=>{
    setModalVisible(false)
  }

  const closeModal = async () => {
    try {
      console.log(plan.id, clientid, details, date, selectedTime, plan.type);
      const res = await api.post("api/appointments/", {
        plan_id: plan.id,
        client_id: clientid,
        appointment_details: details,
        appointment_date: selectedDate,
        appointment_time: formatTime(selectedTime),
        appointment_type: plan.type,
      });

      if (res.status === 201) {
        console.log("Successfully Added");
      }
    } catch (error) {
      console.error(error);
    }
    setModalVisible(false);
  };

  const handleTimeConfirm = (selectedTime) => {
    setSelectedTime(selectedTime);
    setTimePickerVisible(false);
  };

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const currentDate = new Date().toISOString().split("T")[0];

  const markedDates = {
    "2023-06-26": { selected: true },
    "2023-06-27": { selected: true },
    "2023-06-28": { selected: true },
    "2023-06-29": { selected: true },
    "2023-06-30": { selected: true },
  };

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
          <Text style={styles.modalTitle}>{plan.name}</Text>
          <Text style={styles.modalText}>Date: {selectedDate}</Text>
          <Text style={styles.modalText}>
            Time: {selectedTime ? formatTime(selectedTime) : "Select Time"}
          </Text>

          <Button
            title="Select Time"
            color={color}
            onPress={() => setTimePickerVisible(true)}
          />
          <View style={styles.buttons}><>
          <Button title="book" color={color} onPress={closeModal} />
          <Button title="cancel" color={color} onPress={abort} />
          
          </></View>
         
        </View>

        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={() => setTimePickerVisible(false)}
        />
      </Modal>
    </View>
  );
};

export default CreateAppointment;
