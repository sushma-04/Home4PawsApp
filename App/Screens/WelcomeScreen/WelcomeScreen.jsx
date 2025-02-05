import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo or Illustration */}
      <Image 
  source={require('./icon.png')} // Correct way to use local images
  style={styles.logo}
/>

      {/* Title */}
      <Text style={styles.title}>Welcome </Text>

      {/* Description */}
      <Text style={styles.description}>
        Adopt, rescue, and find loving homes for pets in need. Join us in making a difference!
      </Text>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFEF9FF", // Light warm background
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  nextButton: {
    backgroundColor: "#86C900FF", // Red/Orange theme color
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
