import * as React from "react";
import { View, Text } from "react-native";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <View className="flex-1">
      <Text>My Layout</Text>
      <Slot />
    </View>
  );
}
