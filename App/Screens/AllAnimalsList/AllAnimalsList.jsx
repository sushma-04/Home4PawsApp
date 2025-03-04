import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const AllAnimalsList = () => {
  const navigation = useNavigation();
  const petAnimals = useSelector((state) => state.animal.petAnimals);

  const handleNavigation = (pet) => {
    navigation.navigate("PetDetail", { pet });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Available Pets</Text>
      
      <FlatList
        data={petAnimals}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.petCard}>
            <Image source={item.image} style={styles.petImage} />
            <Text style={styles.petName}>{item.name}</Text>
            <Text style={styles.petDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.detailsButton} onPress={() => handleNavigation(item)}>
              <Text style={styles.detailsText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  petCard: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    margin: 8,
    flex: 1,
  },
  petImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  petName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  petDescription: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
    marginVertical: 5,
  },
  detailsButton: {
    backgroundColor: "#86C900FF",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginTop: 5,
  },
  detailsText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default AllAnimalsList;
