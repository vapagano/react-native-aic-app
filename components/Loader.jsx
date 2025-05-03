import React from "react";
import { Text, ActivityIndicator, View } from "react-native";

export const Loader = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text className="mt-10 text-center">Loading artworks...</Text>
    </View>
  );
};
