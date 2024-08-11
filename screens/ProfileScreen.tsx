import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const auth = getAuth();

const ProfileScreen: React.FC<StackScreenProps<any>> = () => {
  const navigation = useNavigation();
  const handleEditProfile = () => {};

  const handleOrders = () => {};

  const handleSettings = () => {};

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      Alert.alert(
        "Sign Out Error",
        "An error occurred while signing out. Please try again."
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }} // Replace with user profile picture URL
          style={styles.profilePicture}
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
        <Button
          title="Edit Profile"
          buttonStyle={styles.editProfileButton}
          titleStyle={styles.editProfileButtonTitle}
          onPress={handleEditProfile}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Orders</Text>
        <TouchableOpacity style={styles.option} onPress={handleOrders}>
          <Icon name="shopping-cart" size={20} color="#ff7f50" />
          <Text style={styles.optionText}>View Orders</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity style={styles.option} onPress={handleSettings}>
          <Icon name="cog" size={20} color="#ff7f50" />
          <Text style={styles.optionText}>Account Settings</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Sign Out"
        buttonStyle={styles.signOutButton}
        titleStyle={styles.signOutButtonTitle}
        onPress={handleSignOut}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
  },

  profileHeader: {
    alignItems: "center",
    marginBottom: 30,
  },

  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ff7f50",
    marginBottom: 15,
  },

  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },

  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 15,
  },

  editProfileButton: {
    backgroundColor: "#ff7f50",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },

  editProfileButtonTitle: {
    fontWeight: "bold",
  },

  section: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  optionText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
  signOutButton: {
    backgroundColor: "#ff4d4f",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
  },

  signOutButtonTitle: {
    fontWeight: "bold",
  },
});

export default ProfileScreen;
