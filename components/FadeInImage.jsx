import React from "react";
import { Animated, View, ActivityIndicator } from "react-native";
import { useFadeInImage } from "../hooks/useFadeInImage";

export function FadeInImage({
  source,
  style,
  resizeMode = "cover",
  loaderColor = "#0000ff",
}) {
  const { opacity, onLoadStart, onLoad, isLoading } = useFadeInImage();

  return (
    <View className="overflow-hidden" style={style}>
      {isLoading && (
        <View className="absolute inset-0 justify-center items-center bg-gray-100">
          <ActivityIndicator size="large" color={loaderColor} />
        </View>
      )}
      <Animated.Image
        source={source}
        style={[style, { opacity }]}
        onLoadStart={onLoadStart}
        onLoad={onLoad}
        resizeMode={resizeMode}
      />
    </View>
  );
}
