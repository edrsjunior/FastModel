// App.js
import React from 'react';
import Cadastro from './pages/Cadastro';
import CadastroEndereco from './pages/CadastroEndereco';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
      
      screenOptions={{
        headerShown: false
      }}

      >

      
      {/* <Home data={data} /> */}
        
        <Stack.Screen
          name='Cadastro'
          component={Cadastro}
        />

        <Stack.Screen 
        name="CadastroEndereco" 
        component={CadastroEndereco} 
        />

        <Stack.Screen
          name='Home'
          component={Home}
        />
        
    
      </Stack.Navigator>

    
    
    </NavigationContainer>
  );
}
