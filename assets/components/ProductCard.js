import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ data }) => {
  const { id,nome, preco, rating, cont_Reviews, img_Url } = data;
  return (
    <>

    <View style={styles.card}>
      <View style={styles.containerImg}>
        <Image source={{uri:img_Url}} style={styles.image} />
      </View>

      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.titleTxt}>{nome}</Text>
          </View>
            <View style={styles.contentPrice} >
              <Text style={styles.price}>R$ {preco}</Text>
              <View style={styles.avalicao}>
                <Text style={styles.rating}>
                  {rating} stars
                </Text>
                <Text style={styles.reviews}>
                  {cont_Reviews} reviews
                </Text>
              </View>
          </View>
      </View>
    </View>

      
    </>
  );
};

const styles = StyleSheet.create({

  card: {
    marginBottom: 50,
  },

  containerImg: {
    backgroundColor: '#F1EDED',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: 339,
    height: 176,
    justifyContent: 'flex-end', // align the image to the bottom of the container,

  },
  image: {
    width: '100%',
    height: '100%', // or adjust as needed
    resizeMode: 'cover', // adjust to 'contain' if needed
    alignSelf: 'center',
    borderRadius: 16, // match container's borderRadius if needed
  },

  content:{
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginleft: 0,
    widt: '100%'
  },
  
  title:{
    maxWidth: 160,
    // backgroundColor: 'green',

    
  },
  titleTxt: {
    fontSize: 20,
    fontWeight: 'regular',
    marginBottom: 5,
    // backgroundColor: 'red'
    
    
  },
  contentPrice: {
    alignItems: 'center'
  },

  price: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 1,
    
  },
  rating: {
    fontSize: 12,
    color: '#666',
    marginRight: 6,
    fontWeight: 'bold',
    color: 'orange',
   

  },

  reviews: {
    color: '#AEAEAE'
  },

  avalicao: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductCard;