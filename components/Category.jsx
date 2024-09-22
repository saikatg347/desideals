import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

// Importing local images using require
const categories = [
  { name: "Clothes", icon: require("../assets/category/cloth.png") },
  { name: "Jewellery", icon: require("../assets/category/jwellery.png") },
  { name: "Shoes", icon: require("../assets/category/shoe.png") },
  { name: "Watches", icon: require("../assets/category/watch.png") },
  // Assuming there is a 'watch.png' icon
];

const Category = () => {
  const navigation = useNavigation(); // Hook for navigation

  return (
    <View style={styles.categoryContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Category</Text>
        {/* See All button */}
        <TouchableOpacity onPress={() => navigation.navigate("AllCategory")}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryItem}>
            <Image source={category.icon} style={styles.icon} />
            <Text style={styles.categoryName}>{category.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 14,
    color: "#FF6F61",
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 20,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginBottom: 5,
    shadowRadius: 40,
    justifyContent: "space-between",
    backgroundColorColor: "grey",
    padding: 20,
  },
  categoryName: {
    fontSize: 12,
  },
});

export default Category;
