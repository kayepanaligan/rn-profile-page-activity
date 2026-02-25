import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function ProfilePage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: "#033017" }}>
          <Image
            source={require("../assets/pic.jpeg")}
            style={[styles.image, { alignSelf: "center" }]}
          />
          <Text style={styles.name}>Hanna Mae P. Avanceña</Text>
          <Text style={styles.bio}>"Jack of all trades, master of none."</Text>
          <Text style={styles.aboutTitle}>About</Text>
          <Text style={styles.aboutContent}>Passionate about UI/UX design and loves creating visually appealing, user-friendly interfaces that enhance the overall user experience.</Text>
          <Text style={styles.aboutTitle}>Interests</Text>
          <Text style={styles.aboutContent}>Graphics design, video editing, and photography. Always eager to learn new skills and explore different creative outlets.
          </Text>
          <Text style={styles.aboutTitle}>Courses</Text>
          <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.section}>Mobile Application Development</Text>
          <Text style={styles.section}>Database Management Systems</Text>
          <Text style={styles.section}>Application Development</Text>
          <Text style={styles.section}>IT Infrastructures</Text>
          <Text style={styles.section}>System Analysis and Design</Text>
        </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  
  container: {
    padding: 25,
    alignItems: "center",
  },
  aboutTitle: { 
    fontSize: 18,
    textAlign: "left",
    fontWeight: "bold",
    marginTop: 20,
    color: "#c9970e", 
    marginLeft: 28, 
  },
  aboutContent: { 
    fontSize: 15,
    textAlign: "left",
    marginLeft: 28,
    marginRight: 30,
    lineHeight: 30,
    color: "#ffffffd8",
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginTop: 50,
  },
  name: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 15,
    color: "#c9970e",
    textAlign: "center",
  },
  bio: {
    textAlign: "center",
    marginVertical: 5,
    fontSize: 14,
    color: "#f5f5f5c9",
    marginBottom: 10,
  },
  section: {
    width: "97%",
    padding: 14,
    borderRadius: 15,
    backgroundColor: "#a1780763",
    borderColor: "#c9970e",
    borderWidth: 1,
    color: "#ffffffcc",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
  },
});