import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function ProfilePage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            source={require("../assets/pic.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Kaye Antoinette Panaligan</Text>
          <Text style={styles.bio}>
            Software enthusiast interested in AI, Data Science, and Mobile App
            Development.
          </Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.sectionText}>
              Passionate about emerging technologies, building scalable
              applications, and exploring innovative solutions in IT.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Interests</Text>
            <View style={styles.listItem}>
              <Text>• Artificial Intelligence</Text>
            </View>
            <View style={styles.listItem}>
              <Text>• Full Stack Development</Text>
            </View>
            <View style={styles.listItem}>
              <Text>• Cybersecurity</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Courses</Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>React Native Development</Text>
              <Text>Mobile app development with TypeScript.</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Data Science Fundamentals</Text>
              <Text>
                Introduction to data analytics, visualization, and ML.
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Cybersecurity Basics</Text>
              <Text>
                Understanding vulnerabilities and safe coding practices.
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Data Visualization</Text>
              <Text>Understanding effective data visualization.</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  bio: {
    textAlign: "center",
    marginVertical: 10,
    fontStyle: "italic",
    color: "#555",
  },
  section: {
    marginTop: 20,
    width: "100%",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
  },
  listItem: {
    marginBottom: 5,
  },
  card: {
    backgroundColor: "#f8f8f8",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  cardTitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },
});
