import React from "react";
import { Stack } from "expo-router";
import { MobileLogo } from "../components/MobileLogo";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: () => <MobileLogo height={30} width={30} />,
        headerTitleAlign: "center",
        headerStyle: {
          height: 50,
        },
      }}
    />
  );
}
