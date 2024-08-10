import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {HomeScreen} from "../screens/HomeScreen";
import {CartScreen} from "../screens/CartScreen";
import {LoginScreen} from "../screens/LoginScreen";

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
