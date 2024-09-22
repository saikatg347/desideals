import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { barcode, hp, rscent, lapy } from "../assets";

const products = [
  {
    id: 1,
    name: "Apple Headset",
    image: hp,
    color: "Blue",
    quantity: 2,
    price: "200",
  },
  {
    id: 2,
    name: "Apple Macbook",
    image: lapy,
    color: "White",
    quantity: 1,
    price: "1000",
  },
  {
    id: 3,
    name: "9am Perfumes",
    image: rscent,
    quantity: 2,
    price: "100",
  },
];

const EReceipt = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="red" />
        </TouchableOpacity>
        <Text style={styles.headerText}>E-Receipt</Text>
      </View>

      {/* qr image */}
      <Image source={barcode} style={styles.barcode} />

      {/* products */}
      <View style={styles.productContainer}>
        {products.map((item) => (
          <View key={item.id} style={{ marginBottom: 20 }}>
            <View style={styles.productWrapper}>
              <Image source={item.image} style={styles.productImage} />

              <View style={{ justifyContent: "center", gap: 6 }}>
                <Text style={{ fontSize: 18, lineHeight: 25 }}>
                  {item.name}
                </Text>
                <View style={{ flexDirection: "row", gap: 6 }}>
                  {item.color && (
                    <Text style={{ fontSize: 11, color: "rgba(0, 0, 0, 0.7)" }}>
                      Color:{" "}
                      <Text style={{ fontWeight: "500" }}>{item.color}</Text>
                    </Text>
                  )}
                  {item.size && (
                    <Text style={{ fontSize: 11, color: "rgba(0, 0, 0, 0.7)" }}>
                      Size:{" "}
                      <Text style={{ fontWeight: "500" }}>{item.size}</Text>
                    </Text>
                  )}
                </View>
                <View style={{ flexDirection: "row", gap: 8 }}>
                  <Text
                    style={{
                      paddingHorizontal: 8,
                      paddingVertical: 2,
                      borderRadius: 2,
                      backgroundColor: "#d9d9d9",
                      fontSize: 10,
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    {item.quantity}
                  </Text>
                  <Text style={{ fontSize: 14, color: "rgba(0, 0, 0, 0.7)" }}>
                    ${item.price}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.divider}></View>
          </View>
        ))}
      </View>

      <View style={{ gap: 10, paddingHorizontal: 30, marginTop: -20 }}>
        <View style={styles.deliveryText}>
          <Text style={{ opacity: 0.7 }}>Order Date</Text>
          <Text>Sep 18, 2024 l 12.00 am</Text>
        </View>
        <View style={styles.deliveryText}>
          <Text style={{ opacity: 0.7 }}>Promo Code</Text>
          <Text>HIPOBOOK07</Text>
        </View>
        <View style={styles.deliveryText}>
          <Text style={{ opacity: 0.7 }}>Delivery Type</Text>
          <Text>Economy</Text>
        </View>
      </View>

      <View style={styles.divider}></View>

      <View
        style={{
          flex: 1,
          borderTopColor: "rgba(217, 217, 217, 0.3)",
          borderTopWidth: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download E-Receipt</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#FFFFFF",
    gap: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 46,
    gap: 95,
  },
  headerText: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "400",
  },
  barcode: {
    alignSelf: "center",
    height: 74,
  },
  divider: {
    alignSelf: "center",
    width: 320,
    height: 1,
    backgroundColor: "rgba(217, 217, 217, .5)",
  },
  productContainer: {
    paddingHorizontal: 18,
  },
  productWrapper: {
    flexDirection: "row",
    marginBottom: 10,
  },
  productImage: {
    width: 85,
    height: 85,
    resizeMode: "contain",
  },
  deliveryText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 12,
  },
  downloadButton: {
    width: 307,
    height: 42,
    borderRadius: 24,
    backgroundColor: "#fd3737",
    justifyContent: "center",
    alignItems: "center",
  },
  downloadButtonText: {
    color: "white",
    fontSize: 20,
  },
});

export default EReceipt;
