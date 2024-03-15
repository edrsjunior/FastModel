// App.js
import React from 'react';
import { View, Image, TextInput } from 'react-native';
import styles from './assets/styles'; // Importe os estilos
import Home from './pages/Home';
import manDefault from './assets/Imgs/manDefault.png';

const data = [
  {
    title: 'Uma Roupa de Qualidade Duvidosa',
    price: '1070,50',
    rating: 4.5,
    reviews: 245,
    image: manDefault,
  },
  {
    title: 'Product 2',
    price: '200,78',
    rating: 4.2,
    reviews: 245,
    image: manDefault,
  },
  {
    title: 'Product 3',
    price: '300,98',
    rating: 4.8,
    reviews: 245,
    image: manDefault,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Home data={data} />
    </View>
  );
}
