// App.js
import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import Button from '../assets/components/button/Button'; // Importe o componente de botão
import LinkButton from '../assets/components/button/LinkButton';
import styles from '../assets/styles'; // Importe os estilos
import {NavigationContainer} from '@react-navigation/native';





const Cadastro = ({navigation}) => {



  return (
    
      <View style={[styles.container,stylesCadastro.container]}>
        <Image
          style={styles.logoTop}
          source={require('../assets/Imgs/Logo.png')}
        />
        <TextInput
          style={styles.defaultInput}
          placeholder="Nome Completo"
        />
        <TextInput
          style={styles.defaultInput}
          placeholder="seuemail@email.com"
        />
        <TextInput
          style={styles.defaultInput}
          placeholder="Data de Nascimento"
        />
          <TextInput
            style={styles.defaultInput}
            placeholder="Senha"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.defaultInput}
            placeholder="Confirmar Senha"
            secureTextEntry={true}
          />
        
        


        <Button
          title="AVANÇAR"
          onPress={() => {
            navigation.navigate('CadastroEndereco')
          }}
          style={styles.defaultButton}
        />

        <LinkButton
          title="Esqueci Minha Senha"
          onPress={() => {
            // Lógica para o botão de link "Esqueci Minha Senha"
          }}
          style={styles.linkButton}
        />
      </View>
  
  );
}

export default Cadastro;

const stylesCadastro = StyleSheet.create({
  container:{
    paddingTop: 0
  }
});