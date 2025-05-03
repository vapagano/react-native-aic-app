import { Link } from "expo-router";
import React, { useRef, useEffect } from "react";
import { View, Text, Animated, Pressable } from "react-native";
import { FadeInImage } from "./FadeInImage";

export const ArtworkCard = ({ artwork, onPress }) => {
  return (
    <Link asChild href={`/artworks/${artwork.id}`}>
      <Pressable className="active:opacity-50">
        <View className="flex-row mb-2.5 p-2.5 bg-gray-50 rounded-md">
          {artwork.image_id && (
            <View className="w-[100px] h-[100px] rounded overflow-hidden">
              <FadeInImage
                source={{
                  uri: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/!200,200/0/default.jpg`,
                }}
                style={{ width: 100, height: 100 }}
                resizeMode="cover"
                loaderColor="#4b5563"
              />
            </View>
          )}
          <View className="flex-1 ml-2.5">
            <Text className="font-bold text-base mb-0.5">
              {artwork.title} {artwork.id}
            </Text>
            <Text className="text-sm mb-0.5 text-gray-600">
              {artwork.artist_display || "Unknown Artist"}
            </Text>
            <Text className="text-xs text-gray-500">
              {artwork.date_display || "Date unknown"}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export const AnimatedArtworkCard = ({ index, ...rest }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <ArtworkCard {...rest} />
    </Animated.View>
  );
};
