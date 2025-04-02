import { View,Text,Image,Button,StyleSheet,ScrollView} from "react-native";

export default function Feed (){
    return(
        <View style ={styles.container}>
            <ScrollView>
            <Text style = {styles.texto}>Feed</Text>
            <Text style = {styles.texto}>the top one from brazuka</Text>

            <Image style={styles.img} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Alanzoka_2021.png/640px-Alanzoka_2021.png'}}/>


            <Button
                      title="nextage bb"
                      color="#3CB371"
                      onPress={() => navigation.navigate('Home')}
                     />
            
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'beige',
        flex: 1,
        justfycontent:'space-evenly',
        
    },
    img:{
        alignItems:'center',
        width: 100,
        height: 200,
    },
    texto:{
        fontSize: 60,
    }
})