import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const PetDetailScreen = ({ route, navigation }) => {
  const { pet } = route.params;

  return (
    <View style={styles.container}>
      <Image source={pet.image} style={styles.petImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.petName}>{pet.name}</Text>
        {pet.category && <Text style={styles.category}>{pet.category.toUpperCase()}</Text>}
        <Text style={styles.description}>{pet.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Adopt Later</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => alert("Adoption Process Started!")}>
          <Text style={styles.buttonText}>Adopt Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  petImage: {
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
  infoContainer: {
    padding: 20,
    alignItems: "center",
  },
  petName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  category: {
    fontSize: 18,
    color: "#666",
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginTop: 10,
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "#86C900FF", // Updated button color
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PetDetailScreen;
