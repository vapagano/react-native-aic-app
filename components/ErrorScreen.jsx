import React from "react";
import { Screen } from "./Screen";
import { Text } from "react-native";

export const ErrorScreen = ({ error }) => {
  return (
    <Screen className="justify-center items-center">
      <Text className="text-red-600 text-align-center text-xl">{error}</Text>
    </Screen>
  );
};
