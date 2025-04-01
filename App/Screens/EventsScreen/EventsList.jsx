import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const events = [
  {
    id: "1",
    title: "Adopt A Friend Fair",
    location: "Central Park, NY",
    date: "April 15, 2025",
    time: "10:00 AM - 4:00 PM",
  },
  {
    id: "2",
    title: "Rescue Adoption Drive",
    location: "Downtown Shelter, LA",
    date: "April 22, 2025",
    time: "11:00 AM - 3:00 PM",
  },
  {
    id: "3",
    title: "Paws & Love Event",
    location: "Beachside, Miami",
    date: "May 5, 2025",
    time: "9:00 AM - 2:00 PM",
  },
  {
    id: "4",
    title: "Happy Tails Adoption",
    location: "City Hall Plaza, SF",
    date: "May 12, 2025",
    time: "12:00 PM - 6:00 PM",
  },
  {
    id: "5",
    title: "Forever Home Festival",
    location: "Pet Park, Chicago",
    date: "June 1, 2025",
    time: "10:00 AM - 5:00 PM",
  },
];

const EventCard = ({ event }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{event.title}</Text>

      <View style={styles.infoRow}>
        <Ionicons name="location-outline" size={18} color="#ff6b6b" />
        <Text style={styles.infoText}>{event.location}</Text>
      </View>

      <View style={styles.infoRow}>
        <Ionicons name="calendar-outline" size={18} color="#4a90e2" />
        <Text style={styles.infoText}>{event.date}</Text>
      </View>

      <View style={styles.infoRow}>
        <Ionicons name="time-outline" size={18} color="#ffcc00" />
        <Text style={styles.infoText}>{event.time}</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Apply as Volunteer</Text>
      </TouchableOpacity>
    </View>
  );
};

const EventsList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Adoption Events</Text>

      <FlatList
        data={events}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity style={styles.showAllButton}>
        <Text style={styles.showAllText}>Show All Events</Text>
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
    paddingBottom: 20,

    // alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 10,
    marginBottom: 15,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: 250,
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 15,
    marginBottom:10,
    marginHorizontal: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    marginLeft: 8,
    color: "#555",
  },
  button: {
    marginTop: 12,
    backgroundColor: "#ff6b6b",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  showAllButton: {
    backgroundColor: "#86C900FF",
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 10,
    marginTop: 20,
    alignItems: "center",
  },
  showAllText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EventsList;
