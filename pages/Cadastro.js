import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, Alert } from 'react-native';
import Button from '../assets/components/button/Button';
import LinkButton from '../assets/components/button/LinkButton';
import styles from '../assets/styles';
import { NavigationContainer } from '@react-navigation/native';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleDataNascimentoChange = (date) => {
    // Se a data estiver vazia, defina como uma string vazia
    if (date === '') {
      setDataNascimento('');
      return;
    }

    // Verifica se a data está no formato dd/MM/yyyy antes de converter
    if (date.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
      const [day, month, year] = date.split('/');
      const formattedDate = `${year}-${month}-${day}`;
      setDataNascimento(formattedDate);
    } else {
      // Mantém a entrada original se não estiver no formato esperado
      setDataNascimento(date);
    }
  };

  const handleCadastro = async () => {
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    const user = {
      Nome: nome,
      SobreNome: sobrenome,
      Email: email,
      Data_Nascimento: dataNascimento,
      Senha: senha,
    };

    try {
      const response = await fetch('https://7087-191-253-1-156.ngrok-free.app/api/usuario/AdicionarUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Se a resposta da API for bem-sucedida, navegue para a próxima tela
        const userId = response.id_Usuario;
        navigation.navigate('CadastroEndereco', { userId: userId });
      } else {
        const errorData = await response.json();
        Alert.alert("Erro", errorData.message || "Erro ao cadastrar usuário");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível se conectar ao servidor");
    }
  };

  return (
    <View style={[styles.container, stylesCadastro.container]}>
      <Image
        style={styles.logoTop}
        source={require('../assets/Imgs/Logo.png')}
      />
      <TextInput
        style={styles.defaultInput}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.defaultInput}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <TextInput
        style={styles.defaultInput}
        placeholder="seuemail@email.com"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.defaultInput}
        placeholder="Data de Nascimento (dd/MM/yyyy)"
        value={dataNascimento ? dataNascimento.split('-').reverse().join('/') : ''} // Mostrar no formato dd/MM/yyyy
        onChangeText={handleDataNascimentoChange}
      />
      <TextInput
        style={styles.defaultInput}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
      <TextInput
        style={styles.defaultInput}
        placeholder="Confirmar Senha"
        secureTextEntry={true}
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <Button
        title="AVANÇAR"
        onPress={handleCadastro}
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
  container: {
    paddingTop: 0,
  },
});
