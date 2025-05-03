import React, { useEffect, useState, useCallback } from "react";
import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../../components/Screen";
import { LoaderScreen } from "../../components/LoaderScreen";
import { FadeInImage } from "../../components/FadeInImage";
import { ErrorScreen } from "../../components/ErrorScreen";

export default function Artwork() {
  const params = useLocalSearchParams();
  const artworkId = params.id || params.toString();

  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArtwork = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/${artworkId}`,
      );
      const json = await response.json();
      return json.data || [];
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch artworks");
      return [];
    }
  }, [artworkId]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchArtwork();
      setArtwork(data);
      setLoading(false);
    };

    fetchData();
  }, [fetchArtwork]);

  if (loading) {
    return <LoaderScreen />;
  }

  if (error) {
    return <ErrorScreen error={error} />;
  }

  if (!artwork) {
    return <ErrorScreen error={`No artwork found with id: ${artworkId}`} />;
  }

  return (
    <Screen>
      <ScrollView className="flex-1 p-4">
        <View className="pb-6">
          {artwork.image_id && (
            <View className="mb-4">
              <FadeInImage
                source={{
                  uri: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/!800,800/0/default.jpg`,
                }}
                style={{ width: "100%", height: 280 }}
                resizeMode="contain"
                loaderColor="#4b5563"
              />
            </View>
          )}

          <Text className="text-2xl font-bold mb-2">{artwork.title}</Text>

          {artwork.artist_title && (
            <Text className="text-lg text-gray-700 mb-4">
              {artwork.artist_title}, {artwork.date_display || "Unknown date"}
            </Text>
          )}

          {artwork.medium_display && (
            <View className="mb-4">
              <Text className="text-sm text-gray-500">
                {artwork.medium_display}
              </Text>
            </View>
          )}

          {artwork.description && (
            <View className="mb-4">
              <Text className="text-lg font-semibold mb-1">Description</Text>
              <Text className="text-base">{artwork.description}</Text>
            </View>
          )}

          {artwork.provenance_text && (
            <View className="mb-4">
              <Text className="text-lg font-semibold mb-1">Provenance</Text>
              <Text className="text-base">{artwork.provenance_text}</Text>
            </View>
          )}

          <View className="mt-4 p-3 bg-gray-100 rounded-lg">
            <Text className="text-sm text-gray-500">
              Dimensions: {artwork.dimensions || "Not available"}
            </Text>
            {artwork.credit_line && (
              <Text className="text-sm text-gray-500 mt-1">
                {artwork.credit_line}
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
