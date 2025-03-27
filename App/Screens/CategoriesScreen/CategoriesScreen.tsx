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
import { useSelector} from "react-redux";
import { RootState } from "../../../redux/store";

const { width } = Dimensions.get("window");
const numColumns = 4; // Ensure at least 4 columns

const CategoriesScreen = () => {
  // redux selectors
 const PetCategory = useSelector((state:RootState)=>state.category.petCategories);
 
 return (
    <View style={styles.container}>
      <Text style={styles.header}>Pet Categories</Text>

      <FlatList
        data={PetCategory} 
        numColumns={numColumns}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => {
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
});

export default CategoriesScreen;
