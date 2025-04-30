import {Text, View,StyleSheet,TextInput,Button} from 'react-native'
import { useState } from 'react';

import { createUserWithEmailAndPassword} from "firebase/auth";
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../controller';
import Home from './home';
export default function Register ({navigation}){

    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")

    
    const cadastroUser = () => {
        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            console.log('cadastrado', userCredential.user.email)
            navigation.navigate('Login');
          })
          .catch((error) => {
            console.log('erro', error.message)
            // ..
          });
    }
    return(
        <View style={styles.Login}>
            <Text style={styles.titulo}>4fit</Text>
            <TextInput style={styles.email}
            value={email}
            onChangeText={setEmail}
            placeholder='email'/>
            <TextInput style={styles.senha}
            placeholder='senha'
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}/>
            <Button
          title="Cadastrar"
          color="#3CB371"
          onPress={cadastroUser}
         />
         <Button
          title="login"
          color="#3CB371"
          onPress={() => navigation.navigate('Login')}
         />
            
        </View> 
         );
}

const styles = StyleSheet.create({    
    Login:{
        flex:3,
        backgroundColor:'beige',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderWidth:1,
    },
    email:{
        justifyContent:'center',
        fontSize:30,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign:'center'
    },
    senha:{
        fontSize:30,
        justifyContent:'center',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign:'center'
    },
    titulo:{
        fontSize:55,
        fontStyle:'italic',
        color:'#556B2F'
    }
})