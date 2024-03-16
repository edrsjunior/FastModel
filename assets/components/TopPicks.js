import React from 'react';
import { View, Text } from 'react-native';
import ProductCard from './ProductCard';

const TopPicks = ({ data }) => {
  return (
    <View>
      <Text>Top Picks</Text>
      {data.map((item, index) => (
        <ProductCard key={index} data={item} />
      ))}
    </View>
  );
};

export default TopPicks;