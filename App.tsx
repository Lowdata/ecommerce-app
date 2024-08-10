import React from "react";
import "./config/firebase";
import RootNavigation from "./navigation";
import { ThemeProvider } from "react-native-elements";
import "react-native-gesture-handler";

export default function App() {
   return (
     <ThemeProvider>
       <RootNavigation />
     </ThemeProvider>
   );
}
