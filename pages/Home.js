import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProductCard from '../assets/components/ProductCard';
import TopPicks from '../assets/components/TopPicks';
import styles from '../assets/styles'; // Importe os estilos;
import Logo from '../assets/Imgs/Logo.png'


const Home = ({ data }) => {
  return (
    <>
      <View style={styles.navBar}>
      <Image source={Logo} style={styles.logoNavBar} />
      </View>

      <View style={styles.container}>
       {data.map((item, index) => (
        <ProductCard key={index} data={item} />
      ))}
    </View>
    </>
    
  );
};

export default Home;

