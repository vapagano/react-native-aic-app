import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Logo } from "./Logo";

export const Header = () => (
  <View style={styles.container}>
    <Logo style={styles.logo} width={50} height={50} />
    <View>
      <Text className="text-4xl font-bold">Art Institute of Chicago</Text>
      <Text style={styles.subtitle}>Featured Artworks</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    color: "#555",
  },
});
