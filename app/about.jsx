import React from "react";
import { View, Text, ScrollView, Linking } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function About() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 bg-white p-4">
        <StatusBar className="auto" />

        <View className="items-center my-6">
          <Text className="text-2xl font-bold text-gray-800">
            About This App
          </Text>
        </View>

        <View className="mb-6">
          <Text className="text-lg font-semibold mb-2 text-gray-800">
            Our Mission
          </Text>
          <Text className="text-base leading-6 text-gray-600 mb-1">
            This application was created to provide users with valuable
            information and an intuitive interface for a seamless experience.
          </Text>
        </View>

        <View className="mb-6">
          <Text className="text-lg font-semibold mb-2 text-gray-800">
            Features
          </Text>
          <Text className="text-base leading-6 text-gray-600 mb-1">
            • Feature one description
          </Text>
          <Text className="text-base leading-6 text-gray-600 mb-1">
            • Feature two description
          </Text>
          <Text className="text-base leading-6 text-gray-600 mb-1">
            • Feature three description
          </Text>
        </View>

        <View className="mb-6">
          <Text className="text-lg font-semibold mb-2 text-gray-800">
            Contact Us
          </Text>
          <Text
            className="text-base leading-6 text-blue-600 underline"
            onPress={() => Linking.openURL("mailto:support@example.com")}
          >
            support@example.com
          </Text>
        </View>

        <View className="mt-8 items-center pb-6">
          <Text className="text-base text-gray-600 mb-1">Version 1.0.0</Text>
          <Text className="text-base text-gray-600">
            © 2025 All Rights Reserved
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
