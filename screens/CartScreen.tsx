import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const cartItems: CartItem[] = [
  {
    id: "1",
    name: "Product 1",
    price: 29.99,
    quantity: 1,
    image: "https://via.placeholder.com/100",
  },
  {
    id: "2",
    name: "Product 2",
    price: 59.99,
    quantity: 2,
    image: "https://via.placeholder.com/100",
  },
];

const CartScreen: React.FC = () => {
  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
      </View>

      <Button
        title="Checkout"
        buttonStyle={styles.checkoutButton}
        titleStyle={styles.checkoutButtonTitle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#333",
    textAlign: "center",
  },

  listContainer: {
    paddingBottom: 20,
  },

  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#e8e8e8",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    alignItems: "center",
  },

  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },

  itemDetails: {
    flex: 1,
  },

  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  itemPrice: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },

  itemQuantity: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },

  totalContainer: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
  },

  totalText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },

  checkoutButton: {
    backgroundColor: "#ff7f50",
    borderRadius: 8,
    paddingVertical: 14,
    marginTop: 10,
  },

  checkoutButtonTitle: {
    fontWeight: "bold",
  },
});

export default CartScreen;
