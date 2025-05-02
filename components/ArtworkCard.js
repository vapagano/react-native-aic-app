import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

export const ArtworkCard = ({ artwork, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        {artwork.thumbnail && (
          <Image
            source={{
              uri: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg`,
            }}
            style={styles.thumbnail}
          />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{artwork.title}</Text>
          <Text style={styles.artist}>
            {artwork.artist_display || "Unknown Artist"}
          </Text>
          <Text style={styles.date}>
            {artwork.date_display || "Date unknown"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 3,
  },
  artist: {
    fontSize: 14,
    marginBottom: 2,
    color: "#666",
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
});
