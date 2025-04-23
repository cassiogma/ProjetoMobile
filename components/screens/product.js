import { View, Text, StyleSheet,FlatList, Image } from "react-native";
import { useState } from "react";
import Card from "../components2/card";

export default function Product(){
    const [produtos, setProdutos] = useState([
        {id:1, nome: 'marmita', valor: 15.99, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGMmArfRUtoKU8AzA0cdYaENVSxfUqGCn0g&s}'},
        {id:2, nome: 'vitamina', valor: 3.99, img:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCuONbMTFbbUj5QlAj_h_SPMGZ1bEsee5b2g&s'},
        {id:3, nome: 'barrinha', valor: 2.99,  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1Gs3HTOa-aVTC2omiZdlo71BI2HgzZknFQ&s'},
    ])
    return(
        <View style={styles.container}>
            {/* <Text style={styles.title}>Produtos</Text>
            <Text style={styles.text}>Lista de produtos</Text>
            {produtos.map((item) => (
                <Text style={styles.Ptext}>
                    {item.nome} - R$ {item.valor}
                </Text>
            ))} */}
            <Text style={styles.title}>Lista de produtos</Text>
            <FlatList
            data = {produtos}
            renderItem={({item}) => (
                <Card
                nome={item.nome}
                valor={item.valor}
                img={item.img}/>
            )}
            keyExtractor={item => item.id}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'beige',
        /* justifyContent: 'space-around', */
        /* alignItems: 'center' */
        /* fontsize: 30, */
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
})