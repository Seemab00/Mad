import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const WinterPretScreen = () => {
  // Import winter pret product images
  const productImages = {
    product1: require('../../assets/image/winter-pret1.jpg'),
    product2: require('../../assets/image/winter-pret2.jpg'),
    product3: require('../../assets/image/winter-pret3.jpg'),
    product4: require('../../assets/image/winter-pret4.jpg'),
    product5: require('../../assets/image/winter-pret5.jpg'),
    product6: require('../../assets/image/winter-pret6.jpg'),
  };

  const products = [
    {
      id: 1,
      name: "Chunky Knit Sweater",
      price: "₨ 17,699",
      image: productImages.product1
    },
    {
      id: 2,
      name: "Premium Wool Coat",
      price: "₨ 38,250",
      image: productImages.product2
    },
    {
      id: 3,
      name: "Fleece Pullover",
      price: "₨ 17,699",
      image: productImages.product3
    },
    {
      id: 4,
      name: "Thermal Leggings",
      price: "₨ 8,699",
      image: productImages.product4
    },
    {
      id: 5,
      name: "Winter Maxi Dress",
      price: "₨ 23,550",
      image: productImages.product5
    },
    {
      id: 6,
      name: "Warm Cardigan",
      price: "₨ 14,750",
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
          <TouchableOpacity style={styles.cartIcon}>
            <Text style={styles.iconText}>🛍️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Page Title */}
      <View style={styles.pageHeader}>
        <Text style={styles.pageTitle}>Winter Collection</Text>
        <Text style={styles.pageSubtitle}>Cozy ready-to-wear winter styles</Text>
      </View>

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
    padding: 25,
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#8B5A3C',
    marginBottom: 5,
    textAlign: 'center',
  },
  pageSubtitle: {
    fontSize: 14,
    color: '#8B5A3C',
    textAlign: 'center',
    opacity: 0.8,
    fontWeight: '500',
  },
  productsGrid: {
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#E6A875',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#FFE8D6',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 12,
  },
  productTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#8B5A3C',
    marginBottom: 6,
    textAlign: 'center',
    lineHeight: 16,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D47C5A',
    marginBottom: 12,
  },
  addToCartButton: {
    backgroundColor: '#FFC8A2',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  addToCartText: {
    color: '#8B5A3C',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});

export default WinterPretScreen;