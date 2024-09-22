import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const RecentlyViewedItems = () => {
  return (
    <View style={styles.card}>
      {/* <Image
        source={{ uri: "https://example.com/bike-image.jpg" }} // Replace with your image link
        style={styles.image}
      /> */}

      {/* Right Side Details */}
      <View style={styles.detailsContainer}>
        {/* Discounted Price */}
        <View style={styles.priceRow}>
          <Text style={styles.currentPrice}>45.0</Text>
          <Text style={styles.originalPrice}>49.0</Text>
        </View>

        {/* Product Name */}
        <Text style={styles.productName}>Suzuki Gixxer SF 150</Text>

        {/* Product Category */}
        <Text style={styles.category}>Bike</Text>

        {/* Add to Cart Button */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>

          {/* Heart Icon */}
          <TouchableOpacity style={styles.heartButton}>
            <Text style={styles.heartText}>❤️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Shadow for Android
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  currentPrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ff5733", // Orange
  },
  originalPrice: {
    fontSize: 18,
    textDecorationLine: "line-through",
    marginLeft: 10,
    color: "#b0b0b0", // Gray color for original price
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  category: {
    fontSize: 14,
    color: "#007b83", // Teal color for the category text
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addToCartButton: {
    backgroundColor: "#ff5733", // Orange button
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  addToCartText: {
    color: "white",
    fontWeight: "bold",
  },
  heartButton: {
    backgroundColor: "#e0f7fa", // Light blue background for the heart button
    padding: 8,
    borderRadius: 8,
  },
  heartText: {
    fontSize: 18,
    color: "#ff5733", // Orange color for heart icon
  },
});

export default RecentlyViewedItems;
