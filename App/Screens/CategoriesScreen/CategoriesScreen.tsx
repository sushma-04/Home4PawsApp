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
const numColumns = 4; // Ensure at least 4 columns

// Define Type for Categories
type Category = {
  id: string;
  name: string;
  image?: any;
};

const CategoriesScreen = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: "1", name: "Dogs", image: require("../../../assets/dog.png") },
    { id: "2", name: "Cats", image: require("../../../assets/cat.png") },
    { id: "3", name: "Birds", image: require("../../../assets/bird.png") },
    { id: "4", name: "Rabbits", image: require("../../../assets/rabbit.png") },
  ]);

  const handleAddCategory = () => {
    console.log("Open Add Category Modal");
    // Open modal or navigate to add category screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pet Categories</Text>

      <FlatList
        data={[...categories, { id: "add", name: "Add" }]} // Ensures "Add" button is always there
        numColumns={numColumns}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => {
          if (item.id === "add") {
            return (
              <></>
              // <TouchableOpacity style={styles.addCategoryBox} onPress={handleAddCategory}>
              //   <Ionicons name="add" size={30} color="#ff6b6b" />
              //   <Text style={styles.addText}>Add</Text>
              // </TouchableOpacity>
            );
          }

          return (
            <TouchableOpacity style={styles.categoryBox}>
              {item.image && <Image source={item.image} style={styles.categoryImage} />}
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: 10,
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "flex-start",
    marginLeft:15
  },
  listContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  categoryBox: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
  },
  addCategoryBox: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#ff6b6b",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  addText: {
    fontSize: 12,
    color: "#ff6b6b",
    marginTop: 4,
  },
});

export default CategoriesScreen;
