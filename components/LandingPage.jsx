import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  bapple,
  boot,
  tree,
  hp,
  lapy,
  model,
  rscent,
  sofa,
  wapple,
} from "../assets"; // Update the path to your assets if necessary

const { width } = Dimensions.get("window");

const products = [
  { image: bapple, width: 115, height: 152, id: 1 },
  { image: sofa, width: 115, height: 152, id: 2 },
  { image: tree, width: 115, height: 152, id: 3 },
  { image: boot, width: 115, height: 152, id: 4 },
  { image: hp, width: 115, height: 152, id: 5 },
  { image: rscent, width: 115, height: 152, id: 6 },
  { image: wapple, width: 115, height: 152, id: 7 },
  { image: lapy, width: 115, height: 152, id: 8 },
  { image: model, width: 115, height: 250, id: 9 },
];

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Product Grid */}
      <View style={styles.gridContainer}>
        {products.map((item) => (
          <View key={item.id} style={styles.productBox}>
            <Image source={item.image} style={styles.productImage} />
          </View>
        ))}
      </View>

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.heading}>
          <Text style={styles.headingHighlight}>Your Shopping </Text>
          Destination For Everything
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Let's Get Started</Text>
        </TouchableOpacity>

        <Text style={styles.signInText}>
          Already have an account?{" "}
          <Text
            style={styles.signInLink}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Sign in
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  productBox: {
    width: width / 3 - 20, // Three columns with spacing
    height: width / 2.5 - 10,
    marginBottom: 15,
    borderRadius: 15, // Rounded corners
    overflow: "hidden",
    backgroundColor: "#F5F5F5B2",
    shadowColor: "#F5F5F5B2",
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 0,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // Ensure the image fits within the container
  },
  textContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  headingHighlight: {
    color: "#E53935",
  },
  subtext: {
    color: "#888",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 10,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#E53935",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  signInText: {
    color: "#666",
    fontSize: 14,
  },
  signInLink: {
    color: "#E53935",
    fontWeight: "bold",
  },
});

export default LandingPage;
