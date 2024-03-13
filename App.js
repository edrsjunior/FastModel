import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <Image style={styles.logoTop}
        source={require('./assets/Imgs/Logo.png')}
        />
        <TextInput 
        style={styles.defaultInput}
        placeholder='seuemail@email.com'
        />

        <TextInput 
        style={styles.defaultInput}
        placeholder='Passoword'
        secureTextEntry= {true}
        />

       <TouchableOpacity 
        style={styles.defaultButton}
        onPress={()=>{}}
        >
          <Text
          style={styles.buttonText}
          >LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.linkButton}
        onPress={()=>{}}
        >
          <Text
          style={styles.linkButtonText}
          >Esqueci Minha Senha</Text>
        </TouchableOpacity>
        

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },
  logoTop: {
    width: 299,
    height:157,
    marginBottom: 146,
  },
  defaultInput: {
    width: 256,
    height: 45,
    backgroundColor: 'transparent',
    color: 'gray',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 9,
    textAlign: 'center',
    marginBottom: 19,

  },
  defaultButton: {
    marginTop: 108,
    marginBottom: 11,
    width: 182,
    height: 42,
    backgroundColor: '#444141',
    borderRadius: 10,
    justifyContent: 'center',
    
  },

  buttonText:{
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,

  },

  linkButton: {

  },

  linkButtonText:{
    color: 'gray',
    borderBottomWidth: 0.5,
    borderBlockColor: 'gray',
  },
 
});
