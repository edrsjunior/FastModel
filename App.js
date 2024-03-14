// App.js
import React from 'react';
import { View, Image, TextInput } from 'react-native';
import Button from './assets/components/button/Button'; // Importe o componente de botão
import LinkButton from './assets/components/button/LinkButton';
import styles from './assets/styles'; // Importe os estilos

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoTop}
        source={require('./assets/Imgs/Logo.png')}
      />
      <TextInput
        style={styles.defaultInput}
        placeholder="seuemail@email.com"
      />

      <TextInput
        style={styles.defaultInput}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Button
        title="LOGIN"
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
