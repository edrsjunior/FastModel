// App.js
import React from 'react';
import { View, Image, TextInput } from 'react-native';
import styles from './assets/styles'; // Importe os estilos
import Home from './pages/Home';

const data = [
  {
    title: 'Uma Roupa de Qualidade Duvidosa',
    price: '100',
    rating: 4.5,
    image: require('./assets/Imgs/manDefault.png')
  },
  {
    title: 'Product 2',
    price: '200',
    rating: 4.2,
    image: require('./assets/Imgs/manDefault.png'),
  },
  {
    title: 'Product 3',
    price: '300',
    rating: 4.8,
    image: require('./assets/Imgs/manDefault.png'),
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Home data={data} />
    </View>
  );
}
