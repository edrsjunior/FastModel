import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../assets/components/button/Button'; // Importe o componente de botão
import LinkButton from '../assets/components/button/LinkButton';
import styles from '../assets/styles'; // Importe os estilos
import axios from 'axios';
import { Svg, Path } from 'react-native-svg';


const getAddressByCEP = async cep => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

const CadastroEndereco = ({navigation}) => {

    const [cep, setCEP] = useState('');
    const [address, setAddress] = useState(null);

return (
    <View style={[styles.container]}>

            <TouchableOpacity 
            style={stylesCadastro.backButton}
            onPress={() => {
                navigation.navigate('Cadastro')
              }}
            
            >
            <Svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M4.83337 29C4.83337 22.5906 7.3795 16.4437 11.9116 11.9116C16.4438 7.37947 22.5906 4.83334 29 4.83334C32.1737 4.83334 35.3162 5.45843 38.2482 6.67292C41.1803 7.88741 43.8444 9.66751 46.0885 11.9116C48.3325 14.1557 50.1126 16.8198 51.3271 19.7518C52.5416 22.6839 53.1667 25.8264 53.1667 29C53.1667 35.4094 50.6206 41.5563 46.0885 46.0884C41.5563 50.6206 35.4094 53.1667 29 53.1667C25.8264 53.1667 22.6839 52.5416 19.7519 51.3271C16.8198 50.1126 14.1557 48.3325 11.9116 46.0884C7.3795 41.5563 4.83337 35.4094 4.83337 29ZM43.5 26.5833H24.1667L32.625 18.125L29.1934 14.6933L14.8867 29L29.1934 43.3067L32.625 39.875L24.1667 31.4167H43.5V26.5833Z" fill="black"/>
            </Svg>
            </TouchableOpacity>
      

            <Image
            style={styles.logoTop}
            source={require('../assets/Imgs/Logo.png')}
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
                        // console.log(data);
                        });
                    } else {
                        setAddress(null);
                    }
                    }}
                />
                <TextInput
                style={styles.defaultInput}
                placeholder="Rua"
                value={address?.logradouro || ''}
                />
                <TextInput
                style={styles.defaultInput}
                placeholder="Numero"
                />
                <TextInput
                style={styles.defaultInput}
                placeholder="Bairro"
                value={address?.bairro || ''}
                />
                <TextInput
                style={styles.defaultInput}
                placeholder="Cidade"
                value={address?.localidade || ''}
                />
            </View>
            
            


            <Button
            title="FINALIZAR"
            onPress={() => {
                navigation.navigate('Home')
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
};

export default CadastroEndereco;

const stylesCadastro = StyleSheet.create({
    container:{
      paddingTop: 0
    },
    backButton:{
        
     
    }
  });