import React from "react";
import { useAuthentication } from "../hooks/useAuthenctication";
import UserStack from "./userStack";
import AuthStack from "./authStack";

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <UserStack /> : <AuthStack />;
}
