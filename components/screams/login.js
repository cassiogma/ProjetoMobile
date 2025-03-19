import {Text, View,StyleSheet,TextInput,Button} from 'react-native'
export default function Login (){
    return(
        <View style={styles.Login}>
            <Text style={styles.titulo}>4fit</Text>
            <TextInput style={styles.email}
            placeholder='email'/>
            <TextInput style={styles.senha}
            placeholder='senha'/>
            <Button
          title="Login"
          color="pink"
          
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
    },
    senha:{
        fontSize:30,
        justifyContent:'center',
        margin: 12,
        borderWidth: 1,
    },
    titulo:{
        fontSize:75
    }
})