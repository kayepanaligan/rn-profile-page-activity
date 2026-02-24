import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function ProfilePage() {
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 20,
    },
    bio: {
      fontSize: 16,
      margin: 20,
    },
    header2: {
      fontWeight: "bold",
      fontSize: 18,
      marginLeft: 15,
    },
    norm2: {
      justifyContent: "flex-start",
      fontSize: 13,
      margin: 15,
    },
    headerbox: {
      fontWeight: "bold",
      fontSize: 10,
      marginBottom: 5,
    },
    normbox: {
      fontSize: 10,
      marginBottom: 5,
    },
    section: {
      marginTop: 20,
      width: "100%",
    },
    box: {
      backgroundColor: "#f0f0f0",
      padding: 10,
      borderRadius: 5,
      margin: 10,
    },
  });
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            source={require("../assets/benebiot.jpg")}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
          <Text style={styles.name}>Gemver Harry Santos</Text>
          <Text style={styles.bio}>
            Outgoing and enthusiastic about technology and innovation.
          </Text>

          <View style={styles.section}>
            <Text style={styles.header2}>About</Text>
            <Text style={styles.norm2}>
              A passionate upcoming developer Learning how to build mobile
              applications using React Native.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.header2}>Interests</Text>
            <Text style={{ fontSize: 13, margin: 5 }}>• Playing Games</Text>
            <Text style={{ fontSize: 13, margin: 5 }}>• Programming</Text>
            <Text style={{ fontSize: 13, margin: 5 }}>• Reading</Text>
            <Text style={{ fontSize: 13, margin: 5 }}>• Cooking</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.header2}>Courses</Text>

            <View style={styles.box}>
              <Text style={styles.headerbox}>
                Mobile Applications Development
              </Text>
              <Text style={styles.normbox}>
                Mobile App Development with Expo Go.
              </Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.headerbox}>Discrete Mathematics</Text>
              <Text style={styles.normbox}>
                Understanding mathematical concepts for computer science.
              </Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.headerbox}>
                Application Development and Emerging Technologies
              </Text>
              <Text style={styles.normbox}>
                Understanding emerging technologies in application development.
              </Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.headerbox}>Database Management System</Text>
              <Text style={styles.normbox}>
                Understanding database concepts and design principles.
              </Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.headerbox}>Enterprise Architecture</Text>
              <Text style={styles.normbox}>
                Understanding enterprise-level system design and architecture.
              </Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.headerbox}>IS Project Management</Text>
              <Text style={styles.normbox}>
                Understanding project management principles in information
                systems.
              </Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.headerbox}>
                Reading in Philippine History
              </Text>
              <Text style={styles.normbox}>
                Understanding Philippine history and its relevance in the modern
                world.
              </Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.headerbox}>
                Science, Technology, and Society
              </Text>
              <Text style={styles.normbox}>
                Understanding the relationship between science, technology, and
                society.
              </Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.headerbox}>Physical Education</Text>
              <Text style={styles.normbox}>
                Understanding the importance of physical fitness and health.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
