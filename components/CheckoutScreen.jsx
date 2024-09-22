import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CheckoutScreen = ({ navigation }) => {
  const [paymentMethod, setPaymentMethod] = useState(null);

  const paymentOptions = [
    {
      id: "1",
      label: "Cash",
      icon: "cash-outline",
      section: "Cash",
    },
    {
      id: "2",
      label: "Wallet",
      icon: "wallet-outline",
      section: "Wallet",
    },
    {
      id: "3",
      label: "Add Card",
      icon: "card-outline",
      section: "Credit / Debit Card",
    },
    {
      id: "4",
      label: "Paypal",
      icon: "logo-paypal",
      section: "More Payment Options",
    },
    {
      id: "5",
      label: "Apple Pay",
      icon: "logo-apple",
      section: "More Payment Options",
    },
    {
      id: "6",
      label: "Google Pay",
      icon: "logo-google",
      section: "More Payment Options",
    },
  ];

  const renderSectionTitle = (section) => (
    <Text style={styles.sectionTitle}>{section}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="red" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Checkout</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView>
        {paymentOptions.reduce((acc, option, index) => {
          const isFirstOfSection =
            index === 0 || paymentOptions[index - 1].section !== option.section;

          if (isFirstOfSection) {
            acc.push(renderSectionTitle(option.section));
          }

          acc.push(
            <TouchableOpacity
              key={option.id}
              style={[
                styles.paymentOption,
                paymentMethod === option.id && styles.selectedOption,
              ]}
              onPress={() => setPaymentMethod(option.id)}
            >
              <View style={styles.paymentOptionIcon}>
                <Ionicons name={option.icon} size={24} color="black" />
              </View>
              <Text style={styles.paymentOptionText}>{option.label}</Text>
              <Ionicons
                name={
                  paymentMethod === option.id
                    ? "radio-button-on-outline"
                    : "radio-button-off-outline"
                }
                size={24}
                color="black"
              />
            </TouchableOpacity>
          );

          return acc;
        }, [])}

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => navigation.navigate("PaymentSuccess")}
        >
          <Text style={styles.confirmButtonText}>Confirm Payment</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Ensures elements are evenly spaced
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center", // Centers the text
    flex: 1, // Makes the text take up the available space in the row
  },
  headerSpacer: {
    width: 24, // This keeps space equivalent to the back arrow's width
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 15,
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedOption: {
    borderColor: "red",
    backgroundColor: "#fce4e4",
  },
  paymentOptionIcon: {
    marginRight: 10,
  },
  paymentOptionText: {
    flex: 1,
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CheckoutScreen;
