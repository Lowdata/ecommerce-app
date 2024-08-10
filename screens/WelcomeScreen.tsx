import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Button } from "react-native-elements";

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/bg-2.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.logo}>MyShop</Text>
        <Text style={styles.welcomeText}>Welcome to MyShop!</Text>

        <View style={styles.buttons}>
          <Button
            title="Sign In"
            buttonStyle={styles.signInButton}
            titleStyle={styles.buttonTitle}
            onPress={() => navigation.navigate("Sign In")}
          />
          <Button
            title="Sign Up"
            type="outline"
            buttonStyle={styles.signUpButton}
            titleStyle={styles.buttonTitleOutline}
            onPress={() => navigation.navigate("Sign Up")}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 30,
  },
  buttons: {
    width: "80%",
  },
  signInButton: {
    backgroundColor: "#ff6f61",
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 10,
  },
  signUpButton: {
    borderColor: "#ff6f61",
    borderWidth: 2,
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 10,
  },
  buttonTitle: {
    fontSize: 18,
    color: "#fff",
  },
  buttonTitleOutline: {
    fontSize: 18,
    color: "#ff6f61",
  },
});

export default WelcomeScreen;
