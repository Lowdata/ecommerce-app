import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import { StackScreenProps } from "@react-navigation/stack";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const auth = getAuth();

const SignUpScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function signUp() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate("Sign In");
    } catch (error) {
      const errorMessage =
        (error as FirebaseError).message || "An unexpected error occurred";
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
        <Text style={styles.title}>Create an Account</Text>

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
            leftIcon={<Icon name="envelope" size={16} color="#ff6f61" />}
            inputStyle={styles.inputText}
          />

          <Input
            placeholder="Password"
            containerStyle={styles.control}
            value={value.password}
            onChangeText={(text) => setValue({ ...value, password: text })}
            secureTextEntry={true}
            leftIcon={<Icon name="key" size={16} color="#ff6f61" />}
            inputStyle={styles.inputText}
          />

          <Button
            title="Sign Up"
            buttonStyle={styles.button}
            onPress={signUp}
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
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  controls: {
    width: "100%",
    maxWidth: 400,
  },
  control: {
    marginBottom: 15,
  },
  inputText: {
    color: "#333",
  },
  button: {
    backgroundColor: "#ff6f61",
    borderRadius: 30,
    paddingVertical: 15,
    marginVertical: 10,
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
});

export default SignUpScreen;
