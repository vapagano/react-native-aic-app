import { Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { AnimatedArtworkCard } from "./ArtworkCard";
import { Screen } from "./Screen";
import { LoaderScreen } from "./LoaderScreen";
import { ErrorScreen } from "./ErrorScreen";

export function Main() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArtworks = async () => {
    try {
      const response = await fetch("https://api.artic.edu/api/v1/artworks");
      const json = await response.json();
      return json.data || [];
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch artworks");
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchArtworks();
      setArtworks(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoaderScreen />;
  }

  if (error) {
    return <ErrorScreen error={error} />;
  }

  return (
    <Screen>
      {artworks.length === 0 ? (
        <Text className="text-center text-base mt-5">No artworks found</Text>
      ) : (
        <FlatList
          data={artworks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <AnimatedArtworkCard artwork={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
