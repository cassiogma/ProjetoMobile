import { View,Text,Button,StyleSheet,ScrollView} from "react-native";

export default function Counter (){
    return(
        <View style ={styles.container}>
            <ScrollView>
            <Text style = {styles.texto}>contador</Text>

            <Button
            title="+"
            color={"#3CB371"}/>

            <Button
            title="-"
            color={"#3CB371"}/>


            <Button
                      title="volta pro login"
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
    texto:{
        fontSize: 60,
    }
})