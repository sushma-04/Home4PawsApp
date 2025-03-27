import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const PetsScreen = () => {
  const navigation = useNavigation();
  const petAnimals = useSelector((state) => state.animal.petAnimals);
  
  const handleNavigation = (pet) => {
    navigation.navigate("PetDetail", { pet });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Pets</Text>

      {/* Show only first 5 pets */}
      <FlatList
        data={petAnimals.slice(0, 5)}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
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

      {/* View All Button */}
      <TouchableOpacity style={styles.viewAllButton} onPress={() => navigation.navigate("AllAnimalsList")}>
        <Text style={styles.viewAllText}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingLeft: 10,
    paddingTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 10,
    marginBottom: 15,
  },
  petCard: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    marginHorizontal: 8,
    width: 180,
  },
  petImage: {
    width: 100,
    height: 100,
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
  },
  detailsText: {
    color: "#fff",
    fontSize: 14,
  },
  viewAllButton: {
    backgroundColor: "#86C900FF",
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 10,
    marginTop: 20,
    alignItems: "center",
  },
  viewAllText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PetsScreen;










// import React from "react";
// import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const petsData = [
//   { id: "1", name: "Buddy", image: require("../../../assets/dog.png"), description: "Friendly and playful dog." },
//   { id: "2", name: "Whiskers", image: require("../../../assets/cat.png"), description: "Loves to nap in the sun." },
//   { id: "3", name: "Coco", image: require("../../../assets/bird.png"), description: "A talkative and colorful bird." },
//   { id: "4", name: "Thumper", image: require("../../../assets/rabbit.png"), description: "Loves to hop around all day." },
// ];

// const PetsScreen = () => {
//     const navigation = useNavigation();

//     const handleNavigation = (pet) => {
//       navigation.navigate("PetDetail", { pet });
//     };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Available Pets</Text>

//       <FlatList
//   data={petsData}
//   keyExtractor={(item) => item.id}
//   horizontal // Enables horizontal scrolling
//   showsHorizontalScrollIndicator={false} // Hides scrollbar
//   renderItem={({ item }) => (
//     <View style={styles.petCard}>
//       <Image source={item.image} style={styles.petImage} />
//       <Text style={styles.petName}>{item.name}</Text>
//       <Text style={styles.petDescription}>{item.description}</Text>
//       <TouchableOpacity style={styles.detailsButton} onPress={() => handleNavigation(item)}>
//         <Text style={styles.detailsText}>View Details</Text>
//       </TouchableOpacity>
//     </View>
//   )}
// />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     paddingVertical: 10,
//     paddingLeft:10,
//     paddingTop:20
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "left",
//     marginLeft:10,
//     marginBottom: 15,
//   },
//   slider: {
//     paddingHorizontal: 10,
//   },
//   petCard: {
//     backgroundColor: "#f8f8f8",
//     borderRadius: 10,
//     padding: 12,
//     alignItems: "center",
//     marginHorizontal: 8,
//     width: 180,
//   },
//   petImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//   },
//   petName: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginTop: 5,
//   },
//   petDescription: {
//     fontSize: 12,
//     color: "#555",
//     textAlign: "center",
//     marginVertical: 5,
//   },
//   detailsButton: {
//     backgroundColor: "#86C900FF",
//     paddingVertical: 5,
//     paddingHorizontal: 12,
//     borderRadius: 5,
//   },
//   detailsText: {
//     color: "#fff",
//     fontSize: 14,
//   },
// });

// export default PetsScreen;

