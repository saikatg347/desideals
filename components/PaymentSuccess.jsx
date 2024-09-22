import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { rightSigns } from "../assets";

const PaymentSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header with Back Arrow and Payment Text */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="red" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment</Text>
      </View>

      {/* Payment Success Section */}
      <View style={styles.content}>
        <Image
          source={rightSigns} // Add your image path here
          style={styles.successImage}
        />
        <Text style={styles.successText}>Payment Successful</Text>
        <Text style={styles.thankYouText}>Thank you for your purchase</Text>
      </View>

      <View style={styles.divider}></View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.viewOrderButton}
          onPress={() => navigation.navigate("ReviewSummary")}
        >
          <Text style={styles.viewOrderText}>View Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewReceiptButton}
          onPress={() => navigation.navigate("EReceipt")}
        >
          <Text style={styles.viewReceiptText}>View E-Receipt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  divider: {
    marginVertical: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderRadius: 10,
    padding: 3,
    shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  backArrow: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  successImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  successText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  thankYouText: {
    fontSize: 16,
    color: "#777",
  },
  buttonContainer: {
    padding: 20,
  },
  viewOrderButton: {
    backgroundColor: "#f44336",
    paddingVertical: 15,
    borderRadius: 50,
    marginBottom: 10,
    alignItems: "center",
  },
  viewOrderText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  viewReceiptButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
  },
  viewReceiptText: {
    color: "#777",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default PaymentSuccess;
