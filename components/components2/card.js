import { View, Text, StyleSheet, Image } from "react-native-web";

export default function Card({nome, valor, img}){
    return(
        <View style = {styles.card}>
                    <Image style ={styles.img} source={{uri: img}}/>
                    <Text style = {styles.text}>{nome}           R${valor}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        padding:10,
        margin: 10,
        backgroundColor: '#EEE8AA',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    text:{
        fontSize:30,
        alignItems: 'center',
    },
    title:{
        fontSize:55,
        fontStyle:'italic',
        color:'#556B2F',
        alignItems: 'center'
    },
    img:{
        height: 100,
        width: 100,
    }

})