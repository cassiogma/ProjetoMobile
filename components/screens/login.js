import {Text, View,StyleSheet,TextInput,Button,} from 'react-native'
import Home from './home';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../controller';
import {useState} from "react";
import { TouchableOpacity } from 'react-native';
export default function Login ({navigation}){

    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")

    const VerificaUser = () => {
            signInWithEmailAndPassword(auth,email,senha).
            then(userCredential => {
                console.log('usuario logado', userCredential.user.email);
                navigation.navigate('Hometab');
            }).catch((error) => {
                console.log('erro ao logar', error.message)
            })
        }
    return(
        <View style={styles.Login}>
            <Text style={styles.titulo}>4fit</Text>
            <TextInput style={styles.email}
            value={email}
            onChangeText={setEmail}
            placeholder='email'/>
            <TextInput style={styles.senha}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
            placeholder='senha'/>
            <Button
          title="Entrar"
          color="#3CB371"
/*           onPress={() => navigation.navigate('Hometab')} */
          onPress = {VerificaUser}
         />
         {/* <Button
          title="Cadastre-se"
          color="#3CB371"
          onPress={() => navigation.navigate('Cadastro')}
         /> */}
         <Text style={styles.textonmrl}>Não tem uma conta?</Text>
         <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.txtcadastro}>Cadastre-se</Text>
         </TouchableOpacity>
            
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
        textAlign:'center',
        opacity: 0.8
    },
    senha:{
        fontSize:30,
        justifyContent:'center',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign:'center',
        opacity: 0.8
    },
    titulo:{
        fontSize:55,
        fontStyle:'italic',
        color:'#556B2F'
    },
    txtcadastro:{
        fontSize:20,
        color:'#556B2F'
    },
    textonmrl:{
        fontSize:20,
    }
})