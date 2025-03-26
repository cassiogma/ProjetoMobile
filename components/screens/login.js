import {Text, View,StyleSheet,TextInput,Button} from 'react-native'
import Home from './home';
export default function Login ({navigation}){
    return(
        <View style={styles.Login}>
            <Text style={styles.titulo}>4fit</Text>
            <TextInput style={styles.email}
            placeholder='email'/>
            <TextInput style={styles.senha}
            placeholder='senha'/>
            <Button
          title="logar"
          color="#3CB371"
          onPress={() => navigation.navigate('Home')}
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
        fontSize:75,
        fontStyle:'italic',
        color:'#556B2F'
    }
})