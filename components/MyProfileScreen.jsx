import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Modal,
  FlatList,
  Button,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { mainProfile } from "../assets";
import DateTimePicker from "@react-native-community/datetimepicker";

const countryCodes = [
  { name: "India", code: "+91" },
  { name: "USA", code: "+1" },
  { name: "Kenya", code: "+254" },
  // Add more countries as needed
];

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState("Nairobi");
  const [village, setVillage] = useState("California");
  const [streetAddress, setStreetAddress] = useState("Muratina Street");
  const [countryCode, setCountryCode] = useState(countryCodes[0].code);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [fullName, setFullName] = useState("Hassan Haadir");

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const selectCountryCode = (code) => {
    setCountryCode(code);
    toggleModal();
  };

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [dob, setDob] = useState("");

  const onChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      const currentDate = selectedDate;
      setDate(currentDate);

      const formattedDate = `${currentDate.getDate()}/${
        currentDate.getMonth() + 1
      }/${currentDate.getFullYear()}`;
      setDob(formattedDate);
    }
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={"red"} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Profile Picture and Name */}
        <View style={styles.profileContainer}>
          <Image source={mainProfile} style={styles.profileImage} />
        </View>

        {/* Basic Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic Details</Text>

          {/* Full Name */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
              editable
            />
          </View>

          {/* Date of Birth */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Date of Birth</Text>

            <TouchableOpacity onPress={showDatepicker}>
              <TextInput
                style={styles.input}
                value={dob}
                placeholder="Select your date of birth"
                editable={false}
                pointerEvents="none"
              />
            </TouchableOpacity>

            {show && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                maximumDate={new Date()}
                onChange={onChange}
              />
            )}
          </View>

          {/* Gender Selection with Radio Buttons */}
          <Text style={styles.label}>Gender</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={styles.genderOption}
              onPress={() => setGender("Male")}
            >
              <Ionicons
                name={
                  gender === "Male"
                    ? "radio-button-on-outline"
                    : "radio-button-off-outline"
                }
                size={24}
                color={gender === "Male" ? "red" : "black"}
              />
              <Text style={styles.genderText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.genderOption}
              onPress={() => setGender("Female")}
            >
              <Ionicons
                name={
                  gender === "Female"
                    ? "radio-button-on-outline"
                    : "radio-button-off-outline"
                }
                size={24}
                color={gender === "Female" ? "red" : "black"}
              />
              <Text style={styles.genderText}>Female</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Contact Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Details</Text>

          {/* Phone Number */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.pickerContainer}>
              <TouchableOpacity
                onPress={toggleModal}
                style={styles.countryCodeButton}
              >
                <Text style={styles.countryCode}>{countryCode}</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.phoneInput}
                value={phone}
                onChangeText={setPhone}
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Email Address */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
        </View>

        {/* Shipping Address Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shipping Address</Text>

          {/* City and Village (Same Line) */}
          <View style={styles.row}>
            <View style={[styles.fieldContainer, { flex: 1, marginRight: 10 }]}>
              <Text style={styles.label}>City</Text>
              <TextInput
                style={styles.input}
                value={city}
                onChangeText={setCity} // Update city state on change
                editable
              />
            </View>

            <View style={[styles.fieldContainer, { flex: 1 }]}>
              <Text style={styles.label}>Village</Text>
              <TextInput
                style={styles.input}
                value={village}
                onChangeText={setVillage} // Update village state on change
                editable
              />
            </View>
          </View>

          {/* Street Address */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Street Address</Text>
            <TextInput
              style={styles.input}
              value={streetAddress}
              onChangeText={setStreetAddress} // Update street address state on change
              editable
            />
          </View>
        </View>

        {/* Security Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security</Text>

          {/* Change Password */}
          <TouchableOpacity style={styles.securityOption}>
            <Ionicons
              name="lock-closed-outline"
              size={10}
              style={styles.icon}
            />
            <Text style={styles.securityText}>Change Password</Text>
            <Text style={styles.rightText}>(Last changed on sep 2024) </Text>
          </TouchableOpacity>

          <View style={styles.gap} />

          {/* Recovery Email */}
          <TouchableOpacity style={styles.securityOption}>
            <Ionicons name="mail-outline" size={10} style={styles.icon} />
            <Text style={styles.securityText}>Recovery Email</Text>
            <Text style={styles.rightText}>(Hassan07@gmail.com)</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.divider}></View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      {/* Country Code Modal */}
      <Modal visible={isModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={countryCodes}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryOption}
                  onPress={() => selectCountryCode(item.code)}
                >
                  <Text>{`${item.name} ${item.code}`}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  section: {
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    paddingTop: 5,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "rgba(245,245,245,0.7)",
    height: 41, // Set input container height
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryCodeButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: "rgba(245,245,245,0.7)",
    height: 41, // Set height for the country code button
    justifyContent: "center", // Center text vertically
  },
  countryCode: {
    fontSize: 16,
  },
  phoneInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "rgba(245,245,245,0.7)",
    height: 41, // Set height for phone input
  },
  row: {
    flexDirection: "row",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
    height: 45,
    backgroundColor: "rgba(245,245,245,0.7)",
  },
  genderOption: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    flex: 1,
    justifyContent: "center",
  },
  genderText: {
    marginLeft: 10,
  },
  securityOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(240,240,240,0.7)",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  securityText: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 12,
  },
  rightText: {
    color: "#000", // Adjust color if needed
    marginLeft: 10,
    fontSize: 9,
  },
  gap: {
    height: 10,
  },
  saveButton: {
    backgroundColor: "rgba(253, 55, 55, 1)",
    padding: 15,
    alignItems: "center",
    borderRadius: 50,
    margin: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  countryOption: {
    padding: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
    marginTop: 5,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#FF6347",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
  },
});

export default ProfileScreen;
