import {Text, View,StyleSheet,Image} from 'react-native'
export default function Teste (){
    return(
        <View style={styles.Teste}>
            <Text style={styles.texto1}>she so perfect</Text>
            <Row></Row>
            <Text style={styles.texto2}>blah blah blah</Text>
            <Row></Row>          
            <Text style={styles.creditos}>oh how i wish</Text>
        </View> 
         );
}
export function Row(){
    return(
        <View style={styles.Row}>
            <Image style={styles.img} source={{uri:'https://media3.giphy.com/media/Me0cxdrtgcozSKcyYB/giphy.gif?cid=6c09b9522k0l1gzxweidvmiapfksqcut7wc9p26jsdv5n6fz&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g'}}/>
            <Image style={styles.img} source={{uri:'https://media3.giphy.com/media/Me0cxdrtgcozSKcyYB/giphy.gif?cid=6c09b9522k0l1gzxweidvmiapfksqcut7wc9p26jsdv5n6fz&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g'}}/>
        </View>
    )
}

const styles = StyleSheet.create({    
    Teste:{
        flex:3,
        backgroundColor:'#ffd1dc',
        justifyContent:'space-evenly'
    },
    Row:{
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
        fontSize: 30,
    },
    img:{
        flexDirection: 'row',
        width:100,
        height:100,
    },
    img1:{
        flexDirection: 'row',
        width:100,
        height:100,
    }
})