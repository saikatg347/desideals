import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { hp, rscent, wapple } from "../assets";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ReviewSummary = () => {
  const navigation = useNavigation();

  const products = [
    {
      name: "Apple Headphones",
      color: "White",
      quantity: 2,
      price: 1800,
      image: hp,
    },
    {
      name: "Perfume",
      quantity: 2,
      price: 40,
      image: rscent,
    },
    {
      name: "Iphone 15 pro",
      color: "White",
      quantity: 1,
      price: 2000,
      image: wapple,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={20} color="#ff0000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Review Summary</Text>
        <Text style={{ width: 24 }}> </Text>
      </View>

      {products.map((product, index) => (
        <View key={index}>
          <View style={styles.productContainer}>
            <Image source={product.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{product.name}</Text>

              {/* Only display color if it exists */}
              {product.color && (
                <Text style={styles.productInfo}>Color: {product.color}</Text>
              )}

              {/* Quantity in box-like style */}
              <View style={styles.priceQuantity}>
                <View style={styles.quantityBox}>
                  <Text style={styles.quantityText}>{product.quantity}</Text>
                </View>
                <Text style={styles.productPrice}>${product.price}</Text>
              </View>
            </View>
          </View>
          <View style={styles.divider} />
        </View>
      ))}

      <View style={styles.orderDetails}>
        <View style={styles.orderRow}>
          <Text style={styles.orderLeft}>Order Date</Text>
          <Text style={styles.orderRight}>Sep 18, 2024 </Text>
        </View>
        <View style={styles.orderRow}>
          <Text style={styles.orderLeft}>Promo Code</Text>
          <Text style={styles.orderRight}>HM455467PR2</Text>
        </View>
        <View style={styles.orderRow}>
          <Text style={styles.orderLeft}>Delivery Type</Text>
          <Text style={styles.orderRight}>Economy</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.orderRow}>
          <Text style={styles.orderLeft}>Total Paid</Text>
          <Text style={styles.orderRight}>$200</Text>
        </View>
        <View style={styles.orderRow}>
          <Text style={styles.orderLeft}>Delivery Charge</Text>
          <Text style={styles.orderRight}>$25</Text>
        </View>
        <View style={styles.orderRow}>
          <Text style={styles.orderLeft}>Tax</Text>
          <Text style={styles.orderRight}>$25</Text>
        </View>
      </View>

      <View style={styles.mainDivider}></View>

      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back To Shop</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 25,
    paddingVertical: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  productContainer: {
    flexDirection: "row",
    marginVertical: 8,
    alignItems: "center",
  },
  productImage: {
    width: 70,
    height: 70,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productInfo: {
    fontSize: 12,
    color: "#555",
  },
  priceQuantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  quantityBox: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  quantityText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 12,
  },
  orderDetails: {
    marginVertical: 8,
  },
  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
  },
  orderLeft: {
    fontSize: 13,
    color: "#555",
  },
  orderRight: {
    fontSize: 13,
    fontWeight: "bold",
  },
  mainDivider: {
    height: 7,
    marginVertical: 35,
    borderBottomColor: "#ddd",
    borderBottomWidth: 2,
    borderRadius: 10,
    padding: 3,
    shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  backButton: {
    backgroundColor: "#ff0000",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 50,

    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ReviewSummary;
