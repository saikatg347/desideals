import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Navbar from "./Navbar";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome for stars
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for carousel indicator

const { width } = Dimensions.get("window"); // Get screen width for proper image sizing

const ProductDetails = ({ navigation }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(2);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current image index

  const productImages = [
    require("../assets/landingpage/hp.png"),
    require("../assets/landingpage/hp.png"),
    require("../assets/landingpage/hp.png"),
  ];

  const colors = [
    { id: 1, color: "#F28B82" },
    { id: 2, color: "#000000" },
    { id: 3, color: "#D3D3D3" },
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentImageIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButtonContainer}
        >
          <View style={styles.backButtonCircle}>
            <Text style={styles.backButton}>←</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imageScrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Improves scroll performance
      >
        {productImages.map((image, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image
              source={image}
              style={styles.productImage}
              resizeMode="contain"
            />
          </View>
        ))}
      </ScrollView>

      <View style={styles.carouselIndicatorContainer}>
        {productImages.map((_, index) => (
          <Ionicons
            key={index}
            name="ellipse"
            size={10}
            color={currentImageIndex === index ? "#000" : "#ddd"} // Active indicator styling
            style={styles.carouselIndicator}
          />
        ))}
      </View>

      <View style={styles.productDetails}>
        <View style={styles.brandReviewContainer}>
          <Text style={styles.brandName}>Apple</Text>
          <View style={styles.reviewContainer}>
            <Text style={styles.reviewText}>4.5</Text>
            <FontAwesome name="star" size={15} color="#FFD700" />
          </View>
        </View>
        <Text style={styles.productName}>Apple Headphones</Text>
        <Text style={styles.productDescription}>
          Designed for seamless integration, offering high-quality sound and
          active noise cancellation.
        </Text>

        <View style={styles.colorContainer}>
          <Text style={styles.label}>Color</Text>
          <View style={styles.colors}>
            {colors.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.colorCircle,
                  { backgroundColor: item.color },
                  selectedColor === item.color && styles.selectedCircle,
                ]}
                onPress={() => handleColorSelect(item.color)}
              />
            ))}
          </View>
        </View>

        <View style={styles.quantityContainer}>
          <Text style={styles.label}>Quantity</Text>
          <View style={styles.quantityControls}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={handleDecreaseQuantity}
            >
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={handleIncreaseQuantity}
            >
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.price}>${quantity * 60}</Text>
        </View>

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  backButtonContainer: {
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  backButtonCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#ff0000",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  imageScrollContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageWrapper: {
    width: width, // Full width for each image
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: width * 0.9, // Responsive width
    height: width * 0.9, // Square images for consistency

    overflow: "hidden", // Prevents overflow
  },
  carouselIndicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  carouselIndicator: {
    margin: 2,
  },
  productDetails: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    marginTop: 10,
  },
  brandReviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brandName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  productDescription: {
    marginVertical: 10,
    fontSize: 14,
    color: "#666",
    textAlign: "left",
  },
  colorContainer: {
    flexDirection: "column",
    marginVertical: 10,
  },
  colors: {
    flexDirection: "row",
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedCircle: {
    borderWidth: 2,
    borderColor: "#FF0000",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#ddd",
    padding: 5,
    borderRadius: 5,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    marginRight: 5,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF0000",
  },
  addToCartButton: {
    backgroundColor: "#FF0000",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  addToCartText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default ProductDetails;
