import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import ProductCard from '../assets/components/ProductCard';
import TopPicks from '../assets/components/TopPicks';
import styles from '../assets/styles'; // Importe os estilos;
import Logo from '../assets/Imgs/Logo.png'
import { Svg, Path } from 'react-native-svg';
import Button from '../assets/components/button/Button';

//IMGS
import bobojaRed from '../assets/Imgs/bobojacomasculinaRed.png';
import bobojaWhite from '../assets/Imgs/bobojacobranco.png';
import jaquetaJeansRasgada from '../assets/Imgs/jaqueta_jeans_city_com_rasgos.png';

const dataMockup = [
  {
    title: 'Boboja Vermelho',
    price: '1070,50',
    rating: 4.5,
    reviews: 245,
    image: bobojaRed,
  },
  {
    title: 'Boboja Vermelho',
    price: '1045,00',
    rating: 4.2,
    reviews: 245,
    image: bobojaWhite,
  },
  {
    title: 'Jaqueta Jeans Street',
    price: '300,98',
    rating: 4.8,
    reviews: 245,
    image: jaquetaJeansRasgada,
  },
];


const Home = ({ data , navigation}) => {
  return (
    
      <View style={styles.container}>
          <View style={styles.navBar}>
            <View style={styles.navBarContent}>
              <TouchableOpacity>
                <Svg style={styles.svgMenu }  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="black"/>
                </Svg>
              </TouchableOpacity>

              <Image source={Logo} style={styles.logoNavBar} />
              <TouchableOpacity>
                <Svg style={styles.svgMenu}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path d="M19 6H17C17 3.2 14.8 1 12 1C9.2 1 7 3.2 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6ZM12 3C13.7 3 15 4.3 15 6H9C9 4.3 10.3 3 12 3ZM19 20H5V8H19V20ZM12 12C10.3 12 9 10.7 9 9H7C7 11.8 9.2 14 12 14C14.8 14 17 11.8 17 9H15C15 10.7 13.7 12 12 12Z" fill="black"/>
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
        <ScrollView style={styles.content}>

          {dataMockup.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}

         
        </ScrollView>

        <Button
          title="Checkout"
          onPress={() => {
            // Lógica para o botão de login
          }}
          style={stylesHome.checkoutBtn}
          />
      </View>
    
  );
};

export default Home;

const stylesHome = StyleSheet.create({
  checkoutBtn:{
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'black',
    fontWeight: 'bold',
    
  },
});