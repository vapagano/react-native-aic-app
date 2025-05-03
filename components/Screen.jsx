import React from "react";
import { View } from "react-native";

export function Screen({ className, children }) {
  return <View className={`flex-1 bg-white ${className}`}>{children}</View>;
}
