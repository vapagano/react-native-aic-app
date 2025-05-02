import React from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import { SafeContainer } from "./SafeContainer";

export const Loader = () => {
  return (
    <SafeContainer style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.loadingText}>Loading artworks...</Text>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    textAlign: "center",
  },
});
