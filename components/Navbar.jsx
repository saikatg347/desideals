import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ensure these icons are imported
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

const Navbar = () => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="home" size={24} color="black" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      {/* Navigate to Cart screen */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Cart")}
      >
        <Ionicons name="cart" size={24} color="black" />
        <Text style={styles.navText}>My Cart</Text>
      </TouchableOpacity>

      {/* Navigate to ProductPage when Shop button is pressed */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("ProductPage")}
      >
        <FontAwesome name="shopping-bag" size={24} color="black" />
        <Text style={styles.navText}>Shop</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <FontAwesome name="user" size={24} color="black" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="menu" size={24} color="black" />
        <Text style={styles.navText}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5, // Optional: adds shadow for Android
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "black",
    marginTop: 4,
  },
});

export default Navbar;
