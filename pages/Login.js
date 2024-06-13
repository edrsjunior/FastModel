// App.js
import React from 'react';
import { View, Image, TextInput, Alert } from 'react-native';
import Button from '../assets/components/button/Button'; // Importe o componente de botão
import LinkButton from '../assets/components/button/LinkButton';
import styles from '../assets/styles'; // Importe os estilos
import { useState } from 'react';
import axios from 'axios';

import { NGROK_URL } from '@env';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    
    try {
      //VALidar uRl
      console.log(`${NGROK_URL}/api/usuario/Login/${email}/${password}`)
      const response = await axios.get(`${NGROK_URL}/api/usuario/Login/${email}/${password}`);
      if (response.status === 200 && response.data === true) {
          navigation.navigate('Home');

      } else {
          // Tratar erros de cadastro de endereço
          Alert.alert("Erro", "Usuário ou senha incorreto, tente novamente mais tarde");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível conectar ao servidor");
    }


  };


  return (
    <View style={styles.container}>
      <Image
        style={styles.logoTop}
        source={require('../assets/Imgs/Logo.png')}
      />
      <TextInput
        style={styles.defaultInput}
        placeholder="seuemail@email.com"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.defaultInput}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button
        title="LOGIN"
        onPress={handleLogin}
        style={styles.defaultButton}
      />

      <LinkButton
        title="Faça seu Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
        style={styles.linkButton}
      />
    </View>
  );
}

export default Login;