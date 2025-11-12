import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  ActivityIndicator, 
  StyleSheet,
  SafeAreaView
} from 'react-native';

const MovieScreen = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      // 3 second loading time for animation
      await new Promise(resolve => setTimeout(resolve, 3000));
      const response = await fetch('https://reactnative.dev/movies.json');
      const data = await response.json();
      setMovies(data.movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <View style={styles.loadingHeart}>
          <Text style={styles.heart}>💖</Text>
          <ActivityIndicator size="large" color="#FF1493" style={styles.spinner} />
        </View>
        <Text style={styles.loadingTitle}>Preparing Movie Magic...</Text>
        <Text style={styles.loadingMessage}>
          Fetching the most amazing films for you! 🌸
        </Text>
        <View style={styles.dotsWrapper}>
          <Text style={styles.dots}>✨</Text>
          <Text style={styles.dots}>🎀</Text>
          <Text style={styles.dots}>🌸</Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerIcon}>🎬</Text>
        <Text style={styles.headerTitle}>Pink Movie Paradise</Text>
        <Text style={styles.headerSubtitle}>Your favorite films in pink! 💕</Text>
      </View>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.movieCard}>
            <View style={styles.cardHeader}>
              <View style={styles.movieNumber}>
                <Text style={styles.numberText}>#{index + 1}</Text>
              </View>
              <View style={styles.yearBadge}>
                <Text style={styles.yearText}>📅 {item.releaseYear}</Text>
              </View>
            </View>
            
            <Text style={styles.movieTitle}>🎀 {item.title}</Text>
            
            <View style={styles.pinkLine}></View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5', 
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF0F5',
    padding: 20,
  },
  loadingHeart: {
    position: 'relative',
    marginBottom: 30,
  },
  heart: {
    fontSize: 60,
    textAlign: 'center',
  },
  spinner: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  loadingTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF69B4',
    textAlign: 'center',
    marginBottom: 10,
  },
  loadingMessage: {
    fontSize: 16,
    color: '#FF1493',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  dotsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dots: {
    fontSize: 24,
    marginHorizontal: 8,
    color: '#FF69B4',
  },
  header: {
    backgroundColor: '#FFB6C1', 
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#FF69B4',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
    marginBottom: 5,
  },
  headerIcon: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#C71585',
    textAlign: 'center',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#DB7093',
    textAlign: 'center',
    fontWeight: '600',
  },
  listContent: {
    padding: 16,
    paddingTop: 20,
  },
  movieCard: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 15,
    borderRadius: 18,
    shadowColor: '#FFB6C1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
    borderWidth: 2,
    borderColor: '#FFE4E6',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  movieNumber: {
    backgroundColor: '#FF69B4',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    shadowColor: '#FF1493',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  numberText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  yearBadge: {
    backgroundColor: '#FFE4E6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFB6C1',
  },
  yearText: {
    color: '#FF69B4',
    fontWeight: '600',
    fontSize: 13,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    lineHeight: 26,
  },
  pinkLine: {
    height: 3,
    backgroundColor: '#FFB6C1',
    borderRadius: 2,
    marginTop: 5,
  },
});

export default MovieScreen;