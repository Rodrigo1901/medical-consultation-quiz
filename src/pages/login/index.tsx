import React from 'react';
import {Text, View , Image, TextInput} from 'react-native';
import styles from './styles';
import Logo from '../../assets/logo.png';

export default function Login() {
  return (
    <View style={styles.container}>
        <View style={styles.boxTop}>
            <Image source={Logo} />
            <Text>Bem vindo de volta!</Text>
        </View>

        <View style={styles.boxMid}>
            <Text>Endereço de e-mail</Text>
            <TextInput placeholder='Digite seu email' />
             <Text>Senha</Text>
            <TextInput placeholder='Digite sua senha' secureTextEntry={true} />
        </View>
        <View style={styles.boxBottom}>

        </View>
    </View>
  )
}