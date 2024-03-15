import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ data }) => {
  const { title, price, rating, image } = data;
  return (
    <>
    <View style={styles.containerImg}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>

    <View style={styles.content}>
      <View style={styles.title}>
      <Text style={styles.titleTxt}>{title}</Text>
      </View>
      
        <View style={styles.contentPrice} >
          <Text style={styles.price}>R$ {price}</Text>
          <Text style={styles.rating}>
            {rating} stars, {rating} reviews
          </Text>
        </View>
    </View>
      
    </>
  );
};

const styles = StyleSheet.create({
  containerImg: {
    marginBottom: 10,
    backgroundColor: '#F1EDED',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: 339,
    height: 176
  },
  image: {
    width: 135,
    height: 157,
    marginBottom: 30,
    backgroundColo: 'red'
    
  },

  content:{
    flexDirection: 'row',
    
  },

  contentPrice: {
    alignItems: 'center'
  },

  titleTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
   
    flexWrap: 'wrap'
    
  },

  title:{
    maxWidth: 160,
    flexDirection: 'row',
    marginRight: 20,
  },

  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    
  },
  rating: {
    fontSize: 12,
    color: '#666',
  },
});

export default ProductCard;