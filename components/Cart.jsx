import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView, // Import ScrollView for scrolling
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const initialItems = [
  {
    id: "1",
    image: require("../assets/landingpage/hp.png"),
    name: "Apple Headphone",
    details: "Color: Blue Size: 047",
    price: 200,
  },
  {
    id: "2",
    image: require("../assets/landingpage/wapple.png"),
    name: "iphone",
    details: "Color: white",
    price: 100,
  },
  {
    id: "3",
    image: require("../assets/landingpage/lapy.png"),
    name: "Apple Macbook",
    details: "Color: Blue, Size: 047",
    price: 1000,
  },
  {
    id: "4",
    image: require("../assets/landingpage/boot.png"),
    name: "Shoe",
    details: "Color: Grey, Size: 09",
    price: 200,
  },
  {
    id: "5",
    image: require("../assets/landingpage/sofa.png"),
    name: "Sofa",
    details: "Color: Red ",
    price: 150,
  },
  {
    id: "6",
    image: require("../assets/landingpage/rscent.png"),
    name: "Perfume",
    details: "Color: Red",
    price: 20,
  },
];

const Cart = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState(initialItems);
  const [promoCode, setPromoCode] = useState("");

  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const deliveryFee = 15;
    const discount = 20;
    const totalCost = subtotal + deliveryFee - discount;
    return { subtotal, deliveryFee, discount, totalCost };
  };

  const { subtotal, deliveryFee, discount, totalCost } = calculateTotal();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="arrow-back" size={24} color="#FF3D00" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cartItemsContainer}>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image source={item.image} style={styles.productImage} />
                <View style={styles.details}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productDetails}>{item.details}</Text>
                  <View style={styles.quantity}>
                    <TouchableOpacity style={styles.quantityButton}>
                      <Text>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>1</Text>
                    <TouchableOpacity style={styles.quantityButton}>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.price}>${item.price}</Text>
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <MaterialIcons
                    name="delete"
                    size={24}
                    color="red"
                    style={styles.deleteIcon}
                  />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={
              cartItems.length > 3 ? null : (
                <View style={styles.placeholderContainer} />
              )
            }
            initialNumToRender={3}
          />
        </View>
      </ScrollView>
      <View>
        {/* Promo Code Section */}
        <View style={styles.promoContainer}>
          <TextInput
            style={styles.promoInput}
            placeholder="Enter Promo Code"
            value={promoCode}
            onChangeText={setPromoCode}
          />
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Total Summary */}
      <View style={styles.totalContainer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Sub-total</Text>
          <Text style={styles.totalValue}>${subtotal}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Delivery fee</Text>
          <Text style={styles.totalValue}>${deliveryFee}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Discount</Text>
          <Text style={styles.totalValue}>- ${discount}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalCostLabel}>Total Cost</Text>
          <Text style={styles.totalCostValue}>${totalCost}</Text>
        </View>

        {/* Proceed to Checkout */}

        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate("Checkout")}
        >
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F8F8F8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10, // Reduced top margin
    paddingBottom: 10,
    position: "relative",
    backgroundColor: "#FFF",
    marginBottom: 5,
  },
  backButton: {
    position: "absolute",
    left: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
    marginTop: 20, // Space for the fixed promo container
  },
  cartItemsContainer: {
    flex: 1,
  },
  cartList: {
    flexGrow: 1,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    paddingLeft: 10,
    height: 100, // Adjust height as needed
  },
  productImage: {
    width: 70,
    height: 70,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  productDetails: {
    fontSize: 11,
    color: "#7D7D7D",
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    padding: 4,
    marginHorizontal: 5,
    borderRadius: 4,
  },
  quantityText: {
    fontSize: 14,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 16,
  },
  deleteIcon: {
    marginLeft: 10,
  },
  promoContainer: {
    position: "absolute", // Fix to the screen
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 10,
    paddingTop: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  promoInput: {
    flex: 1,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: "#FF3D00",
    padding: 10,
    borderRadius: 8,
  },
  applyText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  totalContainer: {
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 14,
  },
  totalValue: {
    fontSize: 14,
  },
  totalCostLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalCostValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "#FF3D00",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },
  checkoutButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Cart;
