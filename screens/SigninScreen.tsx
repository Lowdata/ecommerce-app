// SigninScreen.tsx
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";
import { Input, Button } from "react-native-elements";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { StackScreenProps } from "@react-navigation/stack";


const auth = getAuth();


const SignInScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are required.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      const errorMessage =
        (error as FirebaseError).message || "An unexpected error occurred.";
      setValue({
        ...value,
        error: errorMessage,
      });
    }
  }

  return (
    <ImageBackground
      source={require("../assets/bg-2.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>

        {!!value.error && (
          <View style={styles.error}>
            <Text style={styles.errorText}>{value.error}</Text>
          </View>
        )}

        <View style={styles.controls}>
          <Input
            placeholder="Email"
            containerStyle={styles.control}
            value={value.email}
            onChangeText={(text) => setValue({ ...value, email: text })}
            inputContainerStyle={styles.inputContainer}
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            leftIconContainerStyle={styles.iconStyle}
            placeholderTextColor="#aaa"
          />

          <Input
            placeholder="Password"
            containerStyle={styles.control}
            value={value.password}
            onChangeText={(text) => setValue({ ...value, password: text })}
            secureTextEntry={true}
            inputContainerStyle={styles.inputContainer}
            leftIcon={{ type: "font-awesome", name: "lock" }}
            leftIconContainerStyle={styles.iconStyle}
            placeholderTextColor="#aaa"
          />

          <Button
            title="Sign In"
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            onPress={signIn}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Sign Up")}
          style={styles.signUpContainer}
        >
          <Text style={styles.signUpText}>
            Don’t have an account?{" "}
            <Text style={styles.signUpLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#fff",
  },

  controls: {
    width: "100%",
    maxWidth: 400,
  },

  control: {
    marginBottom: 15,
  },

  inputContainer: {
    backgroundColor: "#e8e8e8",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingLeft: 8,
  },

  iconStyle: {
    marginRight: 10,
  },

  button: {
    backgroundColor: "#ff7f50",
    borderRadius: 8,
    paddingVertical: 14,
    marginTop: 10,
  },

  buttonTitle: {
    fontWeight: "bold",
  },

  error: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#ff4d4d",
    borderRadius: 5,
    width: "100%",
    maxWidth: 400,
  },

  errorText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  signUpContainer: {
    marginTop: 20,
  },

  signUpText: {
    fontSize: 16,
    color: "#333",
  },

  signUpLink: {
    color: "#ff7f50",
    fontWeight: "bold",
  },
});

export default SignInScreen;
