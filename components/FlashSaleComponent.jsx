import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { scent } from "../assets";
import { shampoo } from "../assets";
import { shoes } from "../assets";

const FlashSaleComponent = () => {
  // Static countdown time
  const timeLeft = { hours: 12, minutes: 32, seconds: 56 };

  const categories = ["All", "Newest", "Popular", "Clothes"];

  const products = [
    { id: 1, name: "Men Shoe", price: "$40.00", image: shampoo }, // Replace with real images
    { id: 2, name: "Perfume", price: "$20.00", image: scent },
    { id: 3, name: "Shampoo", price: "$10.00", image: shoes },
  ];

  // Render item function for FlatList
  const renderProductItem = ({ item }) => (
    <View key={item.id} style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.heartIcon}>
          <Text>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartIcon}>
          <Text>🛒</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Flash Sale</Text>
        <Text style={styles.timer}>
          Closing in: {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
        </Text>
      </View>

      {/* Categories */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            style={index === 1 ? styles.activeCategory : styles.category}
          >
            <Text
              style={
                index === 1 ? styles.activeCategoryText : styles.categoryText
              }
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        style={styles.categories}
      />

      {/* Products */}
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  timer: {
    fontSize: 16,
    color: "red",
  },
  categories: {
    flexDirection: "row",
    marginBottom: 20,
  },
  category: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    marginRight: 10,
  },
  activeCategory: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "#ff4040",
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
    color: "#000",
  },
  activeCategoryText: {
    fontSize: 16,
    color: "#fff",
  },
  productContainer: {
    paddingVertical: 20,
  },
  productCard: {
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
    marginRight: 10,
    alignItems: "center",
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  heartIcon: {
    fontSize: 18,
  },
  cartIcon: {
    fontSize: 18,
  },
});

export default FlashSaleComponent;
