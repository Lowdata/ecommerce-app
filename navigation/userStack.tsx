import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./tabStack";
import ProductDetailsScreen from "../screens/ProductDetailScreen";

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
}
