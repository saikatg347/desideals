import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // For back navigation
import MultiSlider from "@ptomasroos/react-native-multi-slider";

const FilterScreen = () => {
  const navigation = useNavigation(); // For back navigation
  const [selectedCategory, setSelectedCategory] = useState("Shoes");
  const [priceRange, setPriceRange] = useState([50, 450]); // Min and Max price range
  const [selectedReview, setSelectedReview] = useState(4.5);
  const [selectedSort, setSelectedSort] = useState("Most Recent");
  const [selectedBrand, setSelectedBrand] = useState("LG");

  const categories = ["All", "Clothes", "Shoes", "Sofa"];
  const reviews = [5, 4.5, 3.5, 2.5, 1.5];
  const sorts = ["All", "Popular", "Top Offers"];
  const brands = ["All", "Apple", "LG", "Oppo"];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="red" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filter</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Categories */}
      <Text style={styles.label}>Category</Text>
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(category)}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedButton,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Price Range */}
      <Text style={styles.label}>Price Range</Text>
      <View style={styles.sliderContainer}>
        <MultiSlider
          values={priceRange}
          min={50}
          max={450}
          step={50}
          onValuesChange={setPriceRange}
          selectedStyle={{ backgroundColor: "red" }}
          unselectedStyle={{ backgroundColor: "#d3d3d3" }}
          containerStyle={{ height: 30 }}
          trackStyle={{ height: 7 }}
          markerStyle={{
            height: 15,
            width: 15,
            borderRadius: 10,
            backgroundColor: "red",
          }}
          allowOverlap={false}
          snapped
          style={{ width: "100%" }}
        />
        <View style={styles.priceLabels}>
          {["$50", "$150", "$250", "$350", "$450"].map((label, index) => (
            <Text key={index} style={styles.priceLabel}>
              {label}
            </Text>
          ))}
        </View>
      </View>

      {/* Reviews */}
      <Text style={styles.label}>Reviews</Text>
      <View style={styles.reviewsContainer}>
        {reviews.map((review) => (
          <View key={review} style={styles.reviewRow}>
            <View style={styles.starRow}>
              {[...Array(Math.floor(review))].map((_, i) => (
                <MaterialIcons key={i} name="star" size={20} color="black" />
              ))}
            </View>
            <Text>{review} star and above</Text>
            <TouchableOpacity
              onPress={() => setSelectedReview(review)}
              style={[
                styles.radioCircle,
                selectedReview === review && styles.selectedRadio,
              ]}
            />
          </View>
        ))}
      </View>

      {/* Sort by */}
      <Text style={styles.label}>Sort by</Text>
      <View style={styles.sortContainer}>
        {sorts.map((sort) => (
          <TouchableOpacity
            key={sort}
            onPress={() => setSelectedSort(sort)}
            style={[
              styles.sortButton,
              selectedSort === sort && styles.selectedButton,
            ]}
          >
            <Text
              style={[
                styles.sortText,
                selectedSort === sort && styles.selectedText,
              ]}
            >
              {sort}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Brand */}
      <Text style={styles.label}>Brand</Text>
      <View style={styles.brandContainer}>
        {brands.map((brand) => (
          <TouchableOpacity
            key={brand}
            onPress={() => setSelectedBrand(brand)}
            style={[
              styles.brandButton,
              selectedBrand === brand && styles.selectedButton,
            ]}
          >
            <Text
              style={[
                styles.brandText,
                selectedBrand === brand && styles.selectedText,
              ]}
            >
              {brand}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.divider}></View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetText}>Reset Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyText}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 30, // Oval shape
    borderColor: "#ccc",
  },
  priceLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%", // Ensure full width
    marginTop: 5, // Add some space between slider and labels
  },
  priceLabel: {
    fontSize: 14, // Match font size with the slider
    color: "#000", // Change color as needed
  },
  selectedButton: {
    backgroundColor: "red",
  },
  categoryText: {
    color: "#000",
  },
  selectedText: {
    color: "#fff",
  },
  sliderContainer: {
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 10,
  },
  reviewsContainer: {
    flexDirection: "column",
    marginVertical: 10,
  },
  reviewRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  starRow: {
    flexDirection: "row",
    marginRight: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRadio: {
    backgroundColor: "black",
  },
  sortContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sortButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 30, // Oval shape
    borderColor: "#ccc",
  },
  brandContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  brandButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 30, // Oval shape
    borderColor: "#ccc",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 10,

    borderRadius: 10,
  },
  resetButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#ccc",
    borderRadius: 30, // Oval shape
  },
  resetText: {
    color: "#000",
  },
  applyButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "red",
    borderRadius: 30, // Oval shape
  },
  applyText: {
    color: "#fff",
  },
  divider: {
    marginVertical: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default FilterScreen;
