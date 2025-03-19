import {Text, View,StyleSheet,Image} from 'react-native'
export default function Home (){
    return(
        <View style={styles.Home}>
            <Text style={styles.texto1}>bem vindo nosso sistema de </Text>
            <Row></Row>
            <Text style={styles.texto2}>catalogo de receitas proteicas</Text>
            <Row2></Row2>          
            <Text style={styles.creditos}>cassio.147216@alunosatc.edu.br</Text>
        </View> 
         );
}
export function Row(){
    return(
        <View style={styles.Row}>
            <Image style={styles.img} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeQ80hPt__BeqL1scyQN99iPE7M9PpAqQNfA&s'}}/>
            <Image style={styles.img} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcWIna2zvLWif8pGQEh5UPR0PXA6r3kcrFg&s'}}/>
        </View>
    )
}
export function Row2(){
    return(
        <View style={styles.Row2}>
            <Image style={styles.img} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqqSA4M9nlbwkP2ehOLEFmAFYE4wawOBRPA&s'}}/>
            <Image style={styles.img} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8TY7CYXHx8tVttj_M0KvGnVouFSf-bth1g&s'}}/>
        </View>
    )
}

const styles = StyleSheet.create({    
    Home:{
        flex:3,
        backgroundColor:'beige',
        justifyContent:'space-evenly'
    },
    Row:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    Row2:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    texto1:{
        alignSelf: 'flex-start',
        fontSize: 30,
    },
    texto2:{
        alignSelf: 'flex-end',
        fontSize: 30,
    },
    creditos:{
        alignSelf: 'center',
        fontSize: 20,
    },
    img:{
        flexDirection: 'row',
        width:200,
        height:200,
    },
})