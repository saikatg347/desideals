import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { profile } from "../assets";

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="red" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <Image
          source={profile} // Replace with the actual profile image URL
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Hassan Haadir</Text>
          <Text style={styles.profileEmail}>hazanihaadir98@gmail.com</Text>
        </View>
      </View>

      {/* Menu Options */}
      <View style={styles.menu}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MyProfileScreen")}
        >
          <MenuItem icon="person-outline" label="My Profile" />
        </TouchableOpacity>

        <MenuItem icon="notifications-outline" label="Notifications" />
        <MenuItem icon="receipt-outline" label="Order History" />
        <MenuItem icon="help-circle-outline" label="Need Help" />
        <MenuItem icon="chatbox-ellipses-outline" label="FAQ" />
        <MenuItem icon="information-circle-outline" label="About App" />
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutContainer}>
        <Ionicons name="log-out-outline" size={35} color="red" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// MenuItem Component
const MenuItem = ({ icon, label }) => (
  <View style={styles.menuItem}>
    <Ionicons name={icon} size={35} color="black" />
    <Text style={styles.menuText}>{label}</Text>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 65,
    height: 65,
    borderRadius: 25,
  },
  profileDetails: {
    marginLeft: 30,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 14,
    color: "gray",
  },
  menu: {
    marginVertical: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  menuText: {
    marginLeft: 20,
    fontSize: 17,
  },
  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    paddingVertical: 30,
  },
  logoutText: {
    color: "red",
    marginLeft: 10,
    fontSize: 17,
  },
});

export default ProfileScreen;
