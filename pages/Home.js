import React from 'react';
import { View, Text } from 'react-native';
import ProductCard from '../assets/components/ProductCard';
import TopPicks from '../assets/components/TopPicks';
import styles from '../assets/styles'; // Importe os estilos


const Home = ({ data }) => {
  return (
    <View style={styles.container}>
      <ProductCard data={data[0]} />
    </View>
  );
};

export default Home;