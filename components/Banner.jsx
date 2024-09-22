import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Banner = () => {
  const images = [
    require("../assets/banner/banner.png"),
    require("../assets/banner/banners.png"),
    // Add more images as needed
  ];

  return (
    <View style={styles.bannerContainer}>
      <Text style={styles.offerdText}>#Special offer only for you</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={styles.scrollContainer}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.banner}>
            <Image source={image} style={styles.bannerImage} />
            <View style={styles.textContainer}>
              <Text style={styles.offerText}>Get Special Offer</Text>
              <Text style={styles.discountText}>up to 40%</Text>
              <Text style={styles.subText}>All Shoes Available</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  scrollContainer: {
    alignItems: "center",
  },
  banner: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
    marginRight: 10,
    width: 300,
  },
  bannerImage: {
    width: "100%",
    height: 150,
  },
  textContainer: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  offerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  discountText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  subText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
  },

  claimButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  offerdText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
});

export default Banner;
