// App.js
import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import Button from '../assets/components/button/Button'; // Importe o componente de botão
import LinkButton from '../assets/components/button/LinkButton';
import styles from '../assets/styles'; // Importe os estilos
import axios from 'axios';

const getAddressByCEP = async cep => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


const Cadastro = () => {

  const [cep, setCEP] = useState('');
  const [address, setAddress] = useState(null);

  return (
    <View style={styles.container}>
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
      <View style={stylesCadastro.endereco}>
        <TextInput
            style={styles.defaultInput}
            placeholder="CEP"
            onChangeText={text => {
              setCEP(text);
              if (text.length === 8) {
                getAddressByCEP(text).then(data => {
                  setAddress(data);
                });
              } else {
                setAddress(null);
              }
            }}
          />
        <TextInput
          style={styles.defaultInput}
          placeholder="Endereço"
          value={address?.logradouro || ''}
        />
        <TextInput
          style={styles.defaultInput}
          placeholder="Numero"
        />
      </View>
      


      <Button
        title="CADASTRAR"
        onPress={() => {
          // Lógica para o botão de login
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
  endereco:{
    
  }
});