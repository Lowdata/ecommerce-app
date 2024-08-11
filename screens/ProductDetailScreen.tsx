import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import axios from "axios";
import { Button } from "react-native-elements";

type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
};

type RootStackParamList = {
  ProductDetailsScreen: {
    product: Product;
  };
  CartScreen: undefined;
};

type ProductDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "ProductDetailsScreen"
>;

const ProductDetailsScreen: React.FC = () => {
  const route = useRoute<ProductDetailsScreenRouteProp>();
  const { product } = route.params;

  const navigation = useNavigation();

  const addToCart = async () => {
    const userId = "USER_ID_HERE";

    try {
      await axios.post(`https://your-api-endpoint.com/cart/${userId}`, {
        productId: product.id,
        quantity: 1,
      });

      alert("Product added to cart!");
      navigation.navigate("CartScreen" as never);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productCategory}>{product.category}</Text>
      <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Button
        title="Add to Cart"
        buttonStyle={styles.addToCartButton}
        titleStyle={styles.addToCartButtonTitle}
        onPress={addToCart}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  productCategory: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ff7f50",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: "#888",
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: "#ff7f50",
    borderRadius: 8,
    paddingVertical: 12,
  },
  addToCartButtonTitle: {
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ProductDetailsScreen;
