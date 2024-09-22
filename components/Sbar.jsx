import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

const Sbar = ({ query, setQuery, isSearchOpen }) => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.container}>
      {/* Location Text and Icon */}
      <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={18} color="white" />
        <View style={styles.locationTextContainer}>
          <Text style={styles.locationLabel}>Location</Text>
          <Text style={styles.locationText}>Nairobi-Kenya</Text>
        </View>
      </View>

      {/* Bell Icon */}
      <TouchableOpacity
        style={styles.bellButton}
        onPress={() => console.log("Bell pressed")}
      >
        <Ionicons name="notifications-outline" size={15} color="white" />
      </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => console.log("Search pressed")}
        >
          <Ionicons name="search" size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={query}
            placeholder="Search"
            placeholderTextColor="gray"
            onTouchStart={() => !isSearchOpen && console.log("Search touched")}
            onChangeText={(e) => setQuery(e)}
          />
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate("FilterScreen")} // Navigate to FilterScreen
        >
          <Ionicons name="filter-outline" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: 40,
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 10,
    position: "absolute",
    top: 8,
    left: 10,
  },
  locationTextContainer: {
    marginLeft: 4,
    flexDirection: "column",
  },
  locationLabel: {
    color: "white",
    fontSize: 10,
  },
  locationText: {
    color: "white",
    fontSize: 12,
  },

  bellButton: {
    position: "absolute",
    top: 8,
    right: 10,
    zIndex: 1,
    padding: 8,
  },

  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginLeft: 18,
    marginRight: 18,
    marginTop: 50,
  },
  iconButton: {
    padding: 4,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  input: {
    flex: 1,
    color: "gray",
    fontSize: 14,
  },

  filterButton: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
});

export default Sbar;
