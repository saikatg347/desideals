import React, { useEffect, useState } from "react"
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Sbar from "./components/Sbar" // Import the Sbar component
import Navbar from "./components/Navbar" // Import the Navbar component
import Category from "./components/Category" // Import the Category component
import AllCategory from "./components/AllCategory" // Import the AllCategory component
import Banner from "./components/Banner" // Import the Banner component
import FlashSaleComponent from "./components/FlashSaleComponent" // Import Flash Sale Component
import SplashScreen from "./components/SplashScreen" // Import the SplashScreen component
// import RecentlyViewedItems from './components/RecentlyViewedItems'; // Import RecentlyViewedItems component
import LandingPage from "./components/LandingPage" // Import LandingPage component
import Signup from "./components/Signup" // Import Signup component
import ProductPage from "./components/ProductPage"
import ProductDetails from "./components/ProductDetails"
import LoginScreen from "./components/LoginScreen" // Import LoginScreen component
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import CheckoutScreen from "./components/CheckoutScreen"
import EReceipt from "./components/EReceipt"
import FilterScreen from "./components/FilterScreen" // Import the FilterScreen component
import PaymentSuccess from "./components/PaymentSuccess"
import ReviewSummary from "./components/ReviewSummary"
import ProfileScreen from "./components/ProfileScreen"
import MyProfileScreen from "./components/MyProfileScreen"

const Stack = createStackNavigator() // Create the stack navigator

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="red"
        barStyle="light-content"
      />
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }} // Optional: Customize header title
        />
        {
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }} // Optional: Customize header title
          />
        }
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AllCategory"
          component={AllCategory}
          options={{ title: "All Categories" }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }} // This will hide the header
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{ headerShown: false }} // This will hide the header
        />
        <Stack.Screen
          name="CheckoutScreen"
          component={CheckoutScreen}
          options={{ headerShown: false }} // This will hide the header
        />
        <Stack.Screen
          name="EReceipt"
          component={EReceipt}
          options={{ headerShown: false }} // This will hide the header
        />
        <Stack.Screen
          name="PaymentSuccess"
          component={PaymentSuccess}
          options={{ headerShown: false }} // This will hide the header
        />
        <Stack.Screen
          name="ReviewSummary"
          component={ReviewSummary}
          options={{ headerShown: false }} // This will hide the header
        />
        <Stack.Screen
          name="ProductPage"
          component={ProductPage}
          options={{ headerShown: false }} // This will hide the header
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: false }} // This will hide the header
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }} // This will hide the header
        />
        <Stack.Screen
          name="MyProfileScreen"
          component={MyProfileScreen}
          options={{ headerShown: false }} // This will hide the header
        />

        {/* Add the FilterScreen to the stack */}
        <Stack.Screen
          name="FilterScreen"
          component={FilterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const HomeScreen = () => {
  const [flashSaleBottom, setFlashSaleBottom] = useState(0)

  const handleFlashSaleLayout = (event) => {
    const { height, y } = event.nativeEvent.layout
    setFlashSaleBottom(height + y)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Sbar />
      <View style={styles.mainContainer}>
        <View style={styles.searchContainer}>
          {/* Add search functionality if needed */}
        </View>

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={styles.content}>
          <Banner />
          <View style={styles.spacer} />
          <Category />
          <View style={styles.flash} />

          {/* Flash Sale Section with onLayout */}
          <View onLayout={handleFlashSaleLayout}>
            <FlashSaleComponent />
          </View>

          <View style={styles.spacer} />
          {/* <RecentlyViewedItems /> */}
        </ScrollView>
      </View>

      {/* Fixed Navbar at the bottom */}
      <Navbar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  searchContainer: {
    backgroundColor: "red",
    paddingHorizontal: 8,
  },
  content: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  spacer: {
    height: 10,
  },
  flash: {
    paddingTop: 20,
  },
})
