import {Text, View,StyleSheet,TextInput,Button,} from 'react-native'
import Home from './home';
export default function Cadastro_produto (){


    return(
        <View style={styles.Login}>
            <Text style={styles.titulo}>cadastro do produto</Text>
            <TextInput style={styles.produto}
            /* value={produto}
            onChangeText={setProduto} */
            placeholder='nome do produto'/>
            <TextInput style={styles.valor}
            /* value={valor}
            onChangeText={setValor} */
            placeholder='preço'/>
            <TextInput style={styles.imagem}
            /* value={imagem}
            onChangeText={setImagem} */
            placeholder='link da imagem'/>
            <Button
          title="cadastrar"
          color="#3CB371"
/*           onPress={() => navigation.navigate('Hometab')} */
         />
         {/* <Button
          title="Cadastre-se"
          color="#3CB371"
          onPress={() => navigation.navigate('Cadastro')}
         /> */} 
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