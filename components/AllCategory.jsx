import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { bag, furniture, jwellery, laptop } from "../assets";
import { cloth, watch, camera, toy } from "../assets";

const allCategories = [
  { name: "Furniture", image: furniture },
  { name: "Cloth", image: cloth },
  { name: "Watch", image: watch },
  { name: "Camera", image: camera },
  { name: "Toy", image: toy },
  { name: "Jewellery", image: jwellery },
  { name: "Bag", image: bag },
  { name: "Laptop", image: laptop },
  { name: "Furniture", image: furniture },
  { name: "Cloth", image: cloth },
  { name: "Watch", image: watch },
  { name: "Camera", image: camera },
  { name: "Toy", image: toy },
  { name: "Jewellery", image: jwellery },
  { name: "Bag", image: bag },
  { name: "Laptop", image: laptop },
];

const AllCategory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Categories</Text>
      <View style={styles.grid}>
        {allCategories.map((category, index) => (
          <View key={index} style={styles.categoryItem}>
            <Image source={category.image} style={styles.icon} />
            <Text style={styles.categoryName}>{category.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryItem: {
    width: "23%", // Adjusted to fit 4 items per row with space in between
    alignItems: "center",
    marginBottom: 20, // Space between rows
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  categoryName: {
    fontSize: 12,
    textAlign: "center",
  },
});

export default AllCategory;
