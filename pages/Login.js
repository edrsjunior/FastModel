// App.js
import React from 'react';
import { View, Image, TextInput } from 'react-native';
import Button from '../assets/components/button/Button'; // Importe o componente de botão
import LinkButton from '../assets/components/button/LinkButton';
import styles from '../assets/styles'; // Importe os estilos
import { useState } from 'react';
import axios from 'axios';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    
    try {
      //VALidar uRl
      const response = await axios.get(`${NGROK_URL}/api/usuario/Login`,{
        email: email,
        senha: password
      });
      if (response.status === 200) {
        // VERIFICAR SE RETORNOU TRUE
        if(response.data){
          navigation.navigate('Home');
        } else{
          Alert.alert("Erro", "Usuário ou senha invalidos, tente novamente!");
        }

      } else {
          // Tratar erros de cadastro de endereço
          Alert.alert("Erro", "Ocorreu um erro durante login, tente novamente mais tarde");
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
        onChange={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.defaultInput}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChange={(text) => setPassword(text)}
      />

      <Button
        title="LOGIN"
        onPress={handleLogin}
        style={styles.defaultButton}
      />

      <LinkButton
        title="Faça seu Cadastro"
        onPress={() => {
          navigation.navigate('Cadastro');
        }}
        style={styles.linkButton}
      />
    </View>
  );
}

export default Login;