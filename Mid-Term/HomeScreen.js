import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

// Import your product images
const productImages = {
  product1: require('../../assets/image/product1.jpg'),
  product2: require('../../assets/image/product2.jpg'),
  product3: require('../../assets/image/product3.jpg'),
  product4: require('../../assets/image/product4.jpg'),
  product5: require('../../assets/image/product5.jpg'),
  product6: require('../../assets/image/product6.jpg'),
};

const HomeScreen = ({ navigation }) => {
  // Product data array
  const products = [
    {
      id: 1,
      name: "Classic Comfort Tee",
      price: "₨ 11,999",
      image: productImages.product1
    },
    {
      id: 2,
      name: "Urban Style Hoodie",
      price: "₨ 9,850",
      image: productImages.product2
    },
    {
      id: 3,
      name: "Tropical Breeze Set",
      price: "₨ 14,750",
      image: productImages.product3
    },
    {
      id: 4,
      name: "Cozy Winter Set",
      price: "₨ 17,499",
      image: productImages.product4
    },
    {
      id: 5,
      name: "Beach Wave Collection",
      price: "₨ 10,999",
      image: productImages.product5
    },
    {
      id: 6,
      name: "Mountain Adventure Gear",
      price: "₨ 12,850",
      image: productImages.product6
    }
  ];

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
          <TouchableOpacity 
            style={styles.cartIcon} 
            onPress={() => navigation.navigate('Cart')}
          >
            <Text style={styles.iconText}>🛍️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories Bar */}
      <View style={styles.categoriesBar}>
        <TouchableOpacity style={styles.categoryTab} onPress={() => navigation.navigate('Winter')}>
          <Text style={styles.categoryTabText}>WINTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryTab} onPress={() => navigation.navigate('Summer')}>
          <Text style={styles.categoryTabText}>SUMMER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryTab} onPress={() => navigation.navigate('Perfumes')}>
          <Text style={styles.categoryTabText}>FRAGRANCE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryTab} onPress={() => navigation.navigate('Sale')}>
          <Text style={styles.categoryTabText}>DEALS</Text>
        </TouchableOpacity>
      </View>

      {/* Top Picks Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FEATURED COLLECTION</Text>
        
        {/* Products Grid */}
        <View style={styles.productsGrid}>
          {products.map((product) => (
            <View key={product.id} style={styles.productCard}>
              <Image 
                source={product.image} 
                style={styles.productImage}
                resizeMode="cover"
              />
              <Text style={styles.productTitle}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
              <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.addToCartText}>ADD TO BAG</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
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
    elevation: 2,
    shadowColor: '#E6A875',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 4,
    backgroundColor: '#FFE8D6',
  },
  cartIcon: {
    padding: 8,
    backgroundColor: '#8B5A3C',
    borderRadius: 20,
    marginLeft: 8,
  },
  iconText: {
    fontSize: 18,
    color: '#8B5A3C',
  },
  categoriesBar: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    borderRadius: 12,
    marginTop: 15,
    justifyContent: 'space-around',
    elevation: 2,
    shadowColor: '#E6A875',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderWidth: 1,
    borderColor: '#FFE8D6',
  },
  categoryTab: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#FFE8D6',
  },
  categoryTabText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8B5A3C',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B5A3C',
    marginBottom: 20,
    textAlign: 'center',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#E6A875',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: '#FFE8D6',
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 12,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8B5A3C',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D47C5A',
    marginBottom: 12,
  },
  addToCartButton: {
    backgroundColor: '#FFC8A2',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  addToCartText: {
    color: '#8B5A3C',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default HomeScreen;