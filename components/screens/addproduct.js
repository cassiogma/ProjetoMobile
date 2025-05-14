import {Text, View,StyleSheet,TextInput,Button,} from 'react-native'
import Home from './home';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../controller';
export default function Cadastro_produto (){

    const [nome,setNome] = useState("");
    const [valor, setValor] = useState("");
    const [imagem, setImagem] = useState("");

    const CadastrarProduto = async () => {
        try {
            await addDoc(collection(db,'produtos'),{
                nome,
                valor: parseFloat(valor),
                imagem
            }),
            setNome('');
            setValor('');
            setImagem('');
        }
        catch (error){
            console.log('erro no cadastro do produto', error);
        }
    }

    return(
        <View style={styles.Login}>
            <Text style={styles.titulo}>cadastro do produto</Text>
            <TextInput style={styles.produto}
            value={nome}
            onChangeText={setNome}
            placeholder='nome do produto'/>
            <TextInput style={styles.valor}
            value={valor}
            onChangeText={setValor}
            placeholder='preço'/>
            <TextInput style={styles.imagem}
            value={imagem}
            onChangeText={setImagem}
            placeholder='link da imagem'/>
         {<Button
          title="Cadastrar"
          color="#3CB371"
          onPress={CadastrarProduto}
         />} 
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
    produto:{
        justifyContent:'center',
        fontSize:25,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign:'center',
        opacity: 0.8
    },
    valor:{
        fontSize:25,
        justifyContent:'center',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign:'center',
        opacity: 0.8
    },
    imagem:{
        fontSize:25,
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
})