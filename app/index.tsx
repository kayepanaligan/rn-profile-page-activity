import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfilePage() {
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      alignItems: "center",
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
    },
    norm: {
      fontSize: 16,
      marginBottom: 10,
    },
  });
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/pic.jpg")}
        style={{ width: 200, height: 200, borderRadius: 100 }}
      />
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
});
