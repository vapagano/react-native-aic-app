import { StyleSheet, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { AnimatedArtworkCard } from "./ArtworkCard";
import { Loader } from "./Loader";
import { SafeContainer } from "./SafeContainer";
import { Header } from "./Header";

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
    return <Loader />;
  }

  if (error) {
    return (
      <SafeContainer>
        <Text style={styles.errorText}>{error}</Text>
      </SafeContainer>
    );
  }

  return (
    <SafeContainer>
      <Header />
      {artworks.length === 0 ? (
        <Text style={styles.noData}>No artworks found</Text>
      ) : (
        <FlatList
          data={artworks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <AnimatedArtworkCard artwork={item} index={index} />
          )}
        />
      )}
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    fontSize: 16,
  },
  noData: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
  },
});
