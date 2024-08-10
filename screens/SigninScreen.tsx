import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Input, Button } from "react-native-elements";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useNavigation } from "@react-navigation/native";

const auth = getAuth();

const SignInScreen = () => {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  const navigation = useNavigation();

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
      // Navigate to the next screen or handle successful sign-in here
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
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }} // Replace with your logo URL
        style={styles.logo}
      />
      <Text style={styles.title}>Sign In</Text>

      {!!value.error && (
        <View style={styles.error}>
          <Text style={styles.errorText}>{value.error}</Text>
        </View>
      )}

      <View style={styles.controls}>
        <Input
          placeholder=" Email"
          containerStyle={styles.control}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
          inputContainerStyle={styles.inputContainer}
        />

        <Input
          placeholder=" Password"
          containerStyle={styles.control}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
          inputContainerStyle={styles.inputContainer}
        />

        <Button title="Sign In" buttonStyle={styles.button} onPress={signIn} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don’t have an account? <Text style={styles.signUpLink}>Sign Up</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 21,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },

  controls: {
    width: "100%",
    maxWidth: 400,
  },

  control: {
    marginBottom: 15,
  },

  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  button: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    paddingVertical: 15,
  },

  error: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#D54826",
    borderRadius: 5,
  },

  errorText: {
    color: "#fff",
    textAlign: "center",
  },

  signUpContainer: {
    marginTop: 20,
  },

  signUpText: {
    fontSize: 16,
    color: "#333",
  },

  signUpLink: {
    color: "#007bff",
    fontWeight: "bold",
  },
});

export default SignInScreen;
