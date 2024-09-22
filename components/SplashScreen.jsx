import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/products/girl.png")} // Full-screen background image
        style={styles.background}
        resizeMode="cover" // Ensures the image covers the entire screen
      >
        {/* Color filter overlay */}
        <View style={styles.filterOverlay} />

        {/* Content */}
        <View style={styles.content}>
          <Image
            source={require("../assets/icon.png")} // Path to the logo
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appName}>HipoBook</Text>
          <Text style={styles.subText}>Market Place</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d94f4f",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  filterOverlay: {
    ...StyleSheet.absoluteFillObject, // Makes the overlay cover the entire background
    backgroundColor: "rgba(255, 0, 0, 0.7)", // Semi-transparent black filter, adjust as needed
  },
  content: {
    alignItems: "center", // Center content horizontally
    zIndex: 1, // Ensure content is on top of the filter
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  appName: {
    fontSize: 32,
    color: "#fff", // White text for contrast
    fontWeight: "bold",
    textAlign: "center",
  },
  subText: {
    fontSize: 16,
    color: "#fff", // White text for the subtext
    textAlign: "center",
  },
});

export default SplashScreen;
