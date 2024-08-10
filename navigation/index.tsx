import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthentication } from "../hooks/useAuthenctication";
import UserStack from "./userStack";
import AuthStack from "./authStack";

export default function RootNavigation() {
  const { user } = useAuthentication();

  return (
    <NavigationContainer>
      {user ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
