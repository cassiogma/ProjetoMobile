import { View,Text,Button,StyleSheet,ScrollView,TouchableOpacity} from "react-native";
import {useState} from 'react';

export default function Counter (){
    const [contador, setContador] = useState(0)

    function add (){
        setContador(contador + 1)
    }
    function sub (){
        if (contador > 0) { 
        setContador(contador - 1)
        }
    }
    return(
        <View style={styles.container}>
            <Text style = {styles.texto}>contador: {contador}</Text>
            <View  style ={styles.botao}>

                <TouchableOpacity style={styles.toque} onPress={add}>
                    <Text style= {styles.txtb}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.toque} onPress={sub}>
                    <Text style= {styles.txtb}>-</Text>
                </TouchableOpacity>
            </View>

            <Button
                      title="volta pro login"
                      color="#3CB371"
                      onPress={() => navigation.navigate('Home')}
                     />
        
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'beige',
        justifyContent: 'space-around',
        alignItems: 'center'
        
    },
    texto:{
        fontSize: 60,
    },
    botao:{
        flexDirection:'row',
        justifyContent: 'space-around',
        width: '80%',

    },
    toque:{
        backgroundColor: '#3CB371',
        width: '35%',
        borderRadius: '10%',
        
    },
    txtb:{
        textAlign:'center',
        fontSize:50
    }
})