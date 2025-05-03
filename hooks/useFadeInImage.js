import { useState, useRef, useEffect } from "react";
import { Animated } from "react-native";

export function useFadeInImage() {
  const opacity = useRef(new Animated.Value(0)).current;
  const [isLoading, setIsLoading] = useState(true);

  const onLoadStart = () => {
    setIsLoading(true);
  };

  const onLoad = () => {
    setIsLoading(false);
    fadeIn();
  };

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    return () => {
      opacity.setValue(0);
    };
  }, [opacity]);

  return {
    opacity,
    onLoadStart,
    onLoad,
    isLoading,
  };
}
