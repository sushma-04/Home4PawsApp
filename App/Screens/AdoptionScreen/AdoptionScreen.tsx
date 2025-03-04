import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const numColumns = Math.floor(width / 160); // Adjust columns dynamically

// Define Type for Pets
type Pet = {
  id: string;
  name: string;
  breed: string;
  age: string;
  image: any;
};

const AdoptionScreen = () => {
  const [pets, setPets] = useState<Pet[]>([
    { id: "1", name: "Bella", breed: "Golden Retriever", age: "2 years", image: require("../../../assets/dog.png") },
    { id: "2", name: "Whiskers", breed: "Persian Cat", age: "1.5 years", image: require("../../../assets/cat.png") },
    { id: "3", name: "Coco", breed: "Labrador", age: "3 years", image: require("../../../assets/dog.png") },
    { id: "4", name: "Luna", breed: "Parrot", age: "6 months", image: require("../../../assets/bird.png") },
  ]);

  const handlePetPress = (pet: Pet) => {
    console.log("View Details:", pet);
    // Navigate to a pet detail screen (to be implemented)
  };

  const handleAddPet = () => {
    console.log("Open Add Pet Modal");
    // Future feature: Open modal or navigate to add pet screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pets Available for Adoption</Text>

      <FlatList
        data={pets}
        numColumns={numColumns}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.petCard} onPress={() => handlePetPress(item)}>
            <Image source={item.image} style={styles.petImage} />
            <Text style={styles.petName}>{item.name}</Text>
            <Text style={styles.petDetails}>{item.breed}</Text>
            <Text style={styles.petDetails}>{item.age}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Floating Add Pet Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddPet}>
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 100, // Space for floating button
  },
  petCard: {
    width: 140,
    backgroundColor: "#ffebcc",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
  },
  petImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  petName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    color: "#302",
  },
  petDetails: {
    fontSize: 12,
    color: "#666",
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#ff6b6b",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
  },
});

export default AdoptionScreen;
