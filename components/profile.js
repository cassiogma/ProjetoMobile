
import {Text, View,StyleSheet,Image} from 'react-native'
export function Profile (){
    return(
        <View style={styles.profile}>
            <Text>sim</Text>
            <Text>blah blah blah</Text>
            <Image style={styles.img} source={{uri:'https://media.tenor.com/us2MeYhnegAAAAAM/max-payne-gif.gif'}}/>
        </View> 
         );
}

export function Favorites(){
    return(
        <View style={styles.favorito}>
            <Text>boa noite</Text>
            <Text>she so perfect</Text>
            <Image style={styles.img} source={require('../assets/laufey.jpg')}/>
        </View>
    )
}

export default function Gallery(){
    return(
        <View style={styles.container}>
            <Text>boa tarde</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'darkorange',
        },
    profile:{
        flex:4,
        //alignItems: 'stretch',
        backgroundColor: 'darkorange',
        alignItems: 'flex-end,'
    },
    favorito:{
        flex:3,
        backgroundColor:'red',
        justifyContent:'space-evenly'
    },
    img:{
        width:250,
        height:250,
    }
})



