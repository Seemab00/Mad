import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const SummerScreen = ({ navigation }) => {
  // Import summer category images
  const categoryImages = {
    pret: require('../../assets/image/summer-pret.jpg'),
    unstitched: require('../../assets/image/summer-unstitched.jpg'),
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>≡</Text>
        </TouchableOpacity>

        <Text style={styles.logo}>STYLEHUB</Text>

        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>⌕</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartIcon}>
            <Text style={styles.iconText}>🛍️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Page Title */}
      <View style={styles.pageHeader}>
        <Text style={styles.pageTitle}>Summer Collection</Text>
        <Text style={styles.pageSubtitle}>Light, breezy styles for sunny days</Text>
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        <TouchableOpacity 
          style={styles.categoryCard}
          onPress={() => navigation.navigate('SummerPret')}
        >
          <Image 
            source={categoryImages.pret} 
            style={styles.categoryImage}
            resizeMode="cover"
          />
          <Text style={styles.categoryName}>Ready-to-Wear</Text>
          <Text style={styles.categoryDescription}>Complete summer outfits</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.categoryCard}
          onPress={() => navigation.navigate('SummerUnstitched')}
        >
          <Image 
            source={categoryImages.unstitched} 
            style={styles.categoryImage}
            resizeMode="cover"
          />
          <Text style={styles.categoryName}>Fabric Collection</Text>
          <Text style={styles.categoryDescription}>Breathable fabrics for tailoring</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFD7BA',
    elevation: 4,
    shadowColor: '#E6A875',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B5A3C',
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 10,
    borderRadius: 25,
    marginHorizontal: 5,
    backgroundColor: '#FFE8D6',
  },
  cartIcon: {
    padding: 10,
    backgroundColor: '#8B5A3C',
    borderRadius: 25,
    marginLeft: 10,
  },
  iconText: {
    fontSize: 16,
    color: '#8B5A3C',
  },
  pageHeader: {
    padding: 30,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#FFC8A2',
    marginHorizontal: 20,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#E6A875',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B5A3C',
    marginBottom: 8,
    textAlign: 'center',
  },
  pageSubtitle: {
    fontSize: 16,
    color: '#8B5A3C',
    textAlign: 'center',
    opacity: 0.8,
    fontWeight: '500',
  },
  categories: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  categoryCard: {
    width: '48%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#E6A875',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#FFE8D6',
  },
  categoryImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginBottom: 15,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B5A3C',
    marginBottom: 5,
    textAlign: 'center',
  },
  categoryDescription: {
    fontSize: 12,
    color: '#8B5A3C',
    textAlign: 'center',
    opacity: 0.7,
  },
});

export default SummerScreen;