import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CheckoutScreen from "./CheckoutScreen";

const Checkout = () => {
  const navigation = useNavigation();
  const [orderList, setOrderList] = useState([
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
      details: "Color: Blue, ",
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
  ]);

  const deleteItem = (id) => {
    setOrderList(orderList.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productInfo}>
          Color: {item.color} Size: {item.size}
        </Text>
      </View>
      <Text style={styles.productPrice}>${item.price}</Text>
      <TouchableOpacity onPress={() => deleteItem(item.id)}>
        <Ionicons name="trash-outline" size={24} color="#888" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => navigation.navigate("Cart")}
        >
          <Ionicons name="arrow-back-circle" size={28} color="#FF3D00" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Checkout</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shipping Address</Text>
          <View style={styles.shippingDetails}>
            <Text style={styles.addressLabel}>🏠</Text>
            <Text style={styles.address}>
              California-palace, 12 street - Nairobi, Kenya
            </Text>
            <TouchableOpacity>
              <Text style={styles.changeButton}>CHANGE</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Choose Shipping Type</Text>
          <View style={styles.shippingType}>
            <View style={styles.shippingTypeRow}>
              <Text style={styles.shippingTypeLabel}>🚚 Economy</Text>
              <TouchableOpacity>
                <Text style={styles.changeButton}>CHANGE</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.shippingDate}>
              Estimated Arrival 25 September 2024
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order List</Text>
          <FlatList
            data={orderList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.flatList}
          />
        </View>
      </ScrollView>

      {/* Navigate to the CheckoutScreen when this button is pressed */}
      <TouchableOpacity
        style={styles.paymentButton}
        onPress={() => navigation.navigate("CheckoutScreen")}
      >
        <Text style={styles.paymentButtonText}>Continue To Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    elevation: 2,
    justifyContent: "center",
  },
  backButtonContainer: {
    position: "absolute",
    left: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollView: {
    flexGrow: 1,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  shippingDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addressLabel: {
    fontSize: 16,
  },
  address: {
    fontSize: 16,
    flex: 1,
    marginLeft: 8,
  },
  changeButton: {
    fontSize: 12,
    color: "grey",
    borderWidth: 1,
    borderColor: "grey",
    padding: 2,
    borderRadius: 4,
    alignSelf: "flex-end",
  },
  shippingType: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  shippingTypeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  shippingTypeLabel: {
    fontSize: 16,
  },
  shippingDate: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  productDetails: {
    flex: 1,
    marginLeft: 16,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productInfo: {
    fontSize: 14,
    color: "#777",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  flatList: {
    maxHeight: 300,
  },
  paymentButton: {
    padding: 16,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 50,
    marginHorizontal: 20,
  },
  paymentButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Checkout;
