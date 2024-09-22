import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Navbar from "./Navbar";
import Sbar from "./Sbar";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import ProductDetails from "./ProductDetails";

const getImageSource = (imageName) => {
  switch (imageName) {
    case "macbook.png":
      return require("../assets/landingpage/lapy.png");
    case "headphone.png":
      return require("../assets/landingpage/hp.png");
    case "iphone14.png":
      return require("../assets/landingpage/bapple.png");
    case "iphone13.png":
      return require("../assets/landingpage/wapple.png");
    case "headphones.png":
      return require("../assets/landingpage/boot.png");
    case "model.png":
      return require("../assets/landingpage/model.png");
    case "scent.png":
      return require("../assets/landingpage/rscent.png");
    case "boot.png":
      return require("../assets/landingpage/boot.png");

    default:
      return require("../assets/landingpage/wapple.png");
  }
};

const ProductPage = () => {
  const [wishList, setWishList] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Apple MacBook Pro",
      price: "$1000.00",
      brand: "Apple",
      image: "macbook.png",
    },
    {
      id: 2,
      name: "Apple Headphone",
      price: "$60.00",
      brand: "Apple",
      image: "headphone.png",
    },
    {
      id: 3,
      name: "iPhone 14 Pro",
      price: "$70.00",
      brand: "Apple",
      image: "iphone14.png",
    },
    {
      id: 4,
      name: "Men Shoe",
      price: "$15.00",
      brand: "Bata",
      image: "boot.png",
    },
    {
      id: 5,
      name: "Apple MacBook",
      price: "$900.00",
      brand: "Apple",
      image: "macbook.png",
    },
    {
      id: 6,
      name: "iPhone 13",
      price: "$50.00",
      brand: "Apple",
      image: "iphone13.png",
    },
    {
      id: 7,
      name: "Perfume",
      price: "$20.00",
      image: "scent.png",
    },
    {
      id: 8,
      name: "Blazer",
      price: "$20.00",
      brand: "Raymond",
      image: "model.png",
    },
    {
      id: 9,
      name: "iPhone 13",
      price: "$50.00",
      brand: "Apple",
      image: "iphone15.png",
    },
    {
      id: 10,
      name: "Perfume",
      price: "$20.00",
      image: "scent.png",
    },
  ]); // Initial products
  const [page, setPage] = useState(1); // Keep track of page number
  const navigation = useNavigation(); // Initialize useNavigation

  const toggleWishList = (productId) => {
    setWishList((prevWishList) =>
      prevWishList.includes(productId)
        ? prevWishList.filter((id) => id !== productId)
        : [...prevWishList, productId]
    );
  };

  const loadMoreProducts = () => {
    // Load next set of products (simulate an API call or add dummy data)
    const newProducts = [
      {
        id: products.length + 1,
        name: "Apple MacBook Pro",
        price: "$1000.00",
        brand: "Apple",
        image: "macbook.png",
      },
      {
        id: products.length + 2,
        name: "Apple Headphone",
        price: "$60.00",
        brand: "Apple",
        image: "headphone.png",
      },
      {
        id: products.length + 3,
        name: "iPhone 14 Pro",
        price: "$70.00",
        brand: "Apple",
        image: "iphone14.png",
      },
      {
        id: products.length + 4,
        name: "iPhone 15 Pro Max",
        price: "$100.00",
        brand: "Apple",
        image: "iphone13.png",
      },
      {
        id: products.length + 5,
        name: "Apple MacBook",
        price: "$900.00",
        brand: "Apple",
        image: "macbook.png",
      },
      {
        id: products.length + 6,
        name: "iPhone 13",
        price: "$50.00",
        brand: "Apple",
        image: "iphone13.png",
      },
      {
        id: products.length + 7,
        name: "Perfume",
        price: "$20.00",
        image: "scent.png",
      },
      {
        id: products.length + 8,
        name: "Blazer",
        price: "$20.00",
        brand: "Raymond",
        image: "model.png",
      },
      {
        id: products.length + 9,
        name: "iPhone 13",
        price: "$50.00",
        brand: "Apple",
        image: "iphone15.png",
      },
      {
        id: products.length + 10,
        name: "Perfume",
        price: "$20.00",
        image: "scent.png",
      },
    ];
    setProducts((prevProducts) => [...prevProducts, ...newProducts]);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <View style={styles.container}>
      {/* Sticky Search Bar */}
      <Sbar />

      {/* Sort By Filters */}
      <View style={styles.filterContainer}>
        <Text style={styles.sortByText}>Sort By</Text>
        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, styles.selectedFilter]}
          >
            <Text style={styles.filterTextSelected}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Recent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Price</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sortByText}>Brand</Text>
        <View style={styles.filterRow}>
          <TouchableOpacity
            style={[styles.filterButton, styles.selectedFilter]} // Keep background for 'All'
          >
            <Text style={styles.filterTextSelected}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Samsung</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, styles.appleFilter]} // Keep background for 'Apple'
          >
            <Text style={styles.filterTextApple}>Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>LG</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            style={styles.productCard}
            onPress={() => {
              if (item.name === "Apple Headphone") {
                navigation.navigate("ProductDetails", {
                  productId: item.id,
                });
              }
            }}
          >
            <Image
              source={getImageSource(item.image)}
              style={styles.productImage}
            />
            {/* Wishlist Icon in the top-right corner of the image */}
            <TouchableOpacity
              onPress={() => toggleWishList(item.id)}
              style={styles.wishlistIcon}
            >
              <Icon
                name={wishList.includes(item.id) ? "heart" : "heart-outline"}
                size={20}
                color={wishList.includes(item.id) ? "red" : "gray"}
              />
            </TouchableOpacity>

            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productBrand}>{item.brand}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.productList}
        numColumns={2} // Display 2 items per row
        onEndReached={loadMoreProducts} // Load more products when end is reached
        onEndReachedThreshold={0.1} // Trigger load more when 10% from the bottom
        ListFooterComponent={<View style={{ height: 100 }} />} // To add space at the bottom
      />

      {/* Sticky Navbar */}
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  filterContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sortByText: {
    fontSize: 16,
    color: "#FF3D00",
    marginBottom: 10,
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#eee",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  selectedFilter: {
    backgroundColor: "#FF3D00",
  },
  appleFilter: {
    backgroundColor: "#eee", // Background color for 'Apple'
  },
  filterText: {
    color: "#000",
    fontSize: 14,
  },
  filterTextSelected: {
    color: "#fff",
    fontSize: 14,
  },
  filterTextApple: {
    color: "#000", // Text color for 'Apple'
    fontSize: 14,
  },
  productList: {
    paddingHorizontal: 15,
  },
  productCard: {
    width: "45%", // Adjust width to ensure spacing
    marginBottom: 14, // Add vertical space between rows
    marginHorizontal: 6, // Add horizontal space between cards
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: "cover", // Ensure the image fits properly
  },
  wishlistIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "transparent",
  },
  productInfo: {
    padding: 10,
    alignItems: "center",
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  productBrand: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF3D00",
  },
});

export default ProductPage;
