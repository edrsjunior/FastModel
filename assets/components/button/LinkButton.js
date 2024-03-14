
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LinkButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 182,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 19,
  },
  buttonText: {
    color: 'rgba(0,0,0,0.3)',
    fontSize: 12,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
});

export default LinkButton;
